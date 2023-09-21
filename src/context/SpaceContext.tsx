import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategorySpaceType, SpaceType } from 'types/SpaceType'

interface IContextProps {
  isLoading: boolean
  space: SpaceType | null
  spaces: SpaceType[]
  spaceCategory: CategorySpaceType[]
  fetchSpaces: () => Promise<void>
  fetchSpace: (id: number | string) => Promise<void>
  fetchSpaceCategory: (id: number) => Promise<void>
}

interface ISpaceProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpacesProvider: React.FC<ISpaceProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [space, setSpace] = useState<SpaceType | null>(null)
  const [spaces, setSpaces] = useState<SpaceType[]>([])
  const [spaceCategory, setSpaceCategory] = useState<CategorySpaceType[]>([])

  const fetchSpaces = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/espacos')
      setSpaces(response.data.collection)
      setSpaceCategory(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpace = useCallback(async (id: number | string) => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/espacos/${id}`)
      setSpace(response.data.item)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpaceCategory = useCallback(async (id: number) => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/espacos/categorias/${id}`)
      setSpaces(response.data.collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSpaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          space,
          spaces,
          spaceCategory,
          fetchSpaces,
          fetchSpace,
          fetchSpaceCategory,
        }),
        [
          isLoading,
          space,
          spaces,
          spaceCategory,
          fetchSpaces,
          fetchSpace,
          fetchSpaceCategory,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useSpaces = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useSpaces must be within MyCustomProvider')
  }

  return context
}
