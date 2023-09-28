import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { AboutType } from 'types/AboutType'

interface IContextProps {
  isLoading: boolean
  about: AboutType | null
  fetchAbout: () => Promise<void>
}

interface IAboutProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const AboutProvider: React.FC<IAboutProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [about, setAbout] = useState<AboutType | null>(null)

  const fetchAbout = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/apps/get')
      setAbout(response.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          about,
          fetchAbout,
        }),
        [isLoading, about, fetchAbout],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useAbout = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useAbout must be within MyCustomProvider')
  }

  return context
}
