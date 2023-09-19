import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryRestaurantType, RestaurantType } from 'types/RestaurantType'

interface IContextProps {
  restaurants: RestaurantType[]
  isLoading: boolean
  restaurantCategory: CategoryRestaurantType[]
  fetchRestaurants: () => Promise<void>
}

interface IRestaurantProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const RestaurantsProvider: React.FC<IRestaurantProviderProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])
  const [restaurantCategory, setRestaurantCategory] = useState<
    CategoryRestaurantType[]
  >([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchRestaurants = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/restaurantes')
      setRestaurants(response.data.collection)
      setRestaurantCategory(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRestaurants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          restaurants,
          restaurantCategory,
          isLoading,
          fetchRestaurants,
        }),
        [restaurants, isLoading, restaurantCategory, fetchRestaurants],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useRestaurants = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useRestaurants must be within MyCustomProvider')
  }

  return context
}
