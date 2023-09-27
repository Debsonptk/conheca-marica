import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryHotelType, HotelType, ItemHotelType } from 'types/HotelType'

interface IContextProps {
  isLoading: boolean
  hotels: HotelType[]
  hotelCategory: CategoryHotelType[]
  hotel: ItemHotelType | null
  fetchHotels: () => Promise<void>
  fetchHotel: (id: number | string) => Promise<void>
  fetchHotelCategory: (id: number) => Promise<void>
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
  const [hotel, setHotel] = useState<ItemHotelType | null>(null)
  const [hotelCategory, setIsHotelCategory] = useState<CategoryHotelType[]>([])

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

  const fetchHotel = useCallback(async (id: number | string) => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/hoteis-e-pousadas/${id}`)
      setHotel(response.data.item)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchHotelCategory = useCallback(async (id: number) => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/hoteis-e-pousadas/categorias/${id}`)
      setIsHotels(response.data.collection)
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
          hotel,
          hotelCategory,
          fetchHotels,
          fetchHotel,
          fetchHotelCategory,
        }),
        [
          isLoading,
          hotels,
          hotelCategory,
          fetchHotels,
          hotel,
          fetchHotel,
          fetchHotelCategory,
        ],
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
