import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryHotelType, HotelType } from 'types/HotelType'

interface IContextProps {
  isLoading: boolean
  hotels: HotelType[]
  hotelsCategory: CategoryHotelType[]
  fetchHotels: () => Promise<void>
}

interface IHotelsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const HotelsProvider: React.FC<IHotelsProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hotels, setIsHotels] = useState<HotelType[]>([])
  const [hotelsCategory, setIsHotelCategory] = useState<CategoryHotelType[]>([])

  const fetchHotels = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/hoteis-e-pousadas')
      setIsHotels(response.data.collection)
      setIsHotelCategory(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchHotels()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          hotels,
          hotelsCategory,
          fetchHotels,
        }),
        [isLoading, hotels, hotelsCategory, fetchHotels],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useHotels = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useHotels must be within MyCustomProvider')
  }

  return context
}
