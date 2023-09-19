import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryStoreType, StoreType } from 'types/StoreType'

interface IContextProps {
  isLoading: boolean
  stores: StoreType[]
  categoryStore: CategoryStoreType[]
  fetchStores: () => Promise<void>
}

interface IStoreProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const StoresProvider: React.FC<IStoreProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [stores, setStores] = useState<StoreType[]>([])
  const [categoryStore, setCategoryStore] = useState<CategoryStoreType[]>([])

  const fetchStores = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/comercios')
      setStores(response.data.collection)
      setCategoryStore(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStores()
    // eslint-disable-next-line prettier/prettier, react-hooks/exhaustive-deps
  },[])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          stores,
          categoryStore,
          fetchStores,
        }),
        [isLoading, stores, categoryStore, fetchStores],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useStores = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useStores must be within MyCustomProvider')
  }

  return context
}
