import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { SpotCategoryType, SpotType } from 'types/SpotType'

interface IContextProps {
  isLoading: boolean
  spots: SpotType[]
  spotCategory: SpotCategoryType[]
  fetchSpots: () => Promise<void>
}

interface ISpotProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpotsProvider: React.FC<ISpotProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
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

  useEffect(() => {
    fetchSpots()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          spots,
          spotCategory,
          fetchSpots,
        }),
        [isLoading, spots, spotCategory, fetchSpots],
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
