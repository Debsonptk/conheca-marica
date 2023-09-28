import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { ItemSpotType, SpotCategoryType, SpotType } from 'types/SpotType'

interface IContextProps {
  isLoading: boolean
  spot: ItemSpotType | null
  spots: SpotType[]
  spotCategory: SpotCategoryType[]
  fetchSpots: () => Promise<void>
  fetchSpot: (id: number | string) => Promise<void>
  fetchSpotCategory: (id: number) => Promise<void>
}

interface ISpotProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpotsProvider: React.FC<ISpotProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [spot, setSpot] = useState<ItemSpotType | null>(null)
  const [spots, setSpots] = useState<SpotType[]>([])
  const [spotCategory, setSpotCategory] = useState<SpotCategoryType[]>([])

  const fetchSpots = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/pontos')
      setSpots(response.data.collection)
      setSpotCategory(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpot = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/pontos')
      setSpot(response.data.item)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpotCategory = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/pontos')
      setSpots(response.data.collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSpots()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          spot,
          spots,
          spotCategory,
          fetchSpots,
          fetchSpot,
          fetchSpotCategory,
        }),
        [
          isLoading,
          spots,
          spot,
          spotCategory,
          fetchSpots,
          fetchSpot,
          fetchSpotCategory,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useSpots = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useSpots must be within MyCustomProvider')
  }

  return context
}
