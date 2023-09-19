import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryEventType, EventType } from 'types/EventType'

interface IContextProps {
  isLoading: boolean
  events: EventType[]
  eventCategory: CategoryEventType[]
  fetchEvents: () => Promise<void>
}

interface IEventsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventsProvider: React.FC<IEventsProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvents] = useState<EventType[]>([])
  const [eventCategory, setEventCategory] = useState<CategoryEventType[]>([])

  const fetchEvents = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get('/eventos')
      setEvents(response.data.collection)
      setEventCategory(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          events,
          eventCategory,
          fetchEvents,
        }),
        [isLoading, events, eventCategory, fetchEvents],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useEvent = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useEvent must be within MyCustomProvider')
  }

  return context
}
