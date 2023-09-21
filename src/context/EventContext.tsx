import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryEventType, EventType, ItemEventType } from 'types/EventType'

interface IContextProps {
  isLoading: boolean
  events: EventType[]
  event: ItemEventType | null
  eventCategory: CategoryEventType[]
  fetchEvents: () => Promise<void>
  fetchEvent: (id: number | string) => Promise<void>
  fetchCategoryEvent: (id?: number) => Promise<void>
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
  const [event, setEvent] = useState<ItemEventType | null>(null)
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

  const fetchEvent = useCallback(async (id: number | string) => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/eventos/${id}`)
      setEvent(response.data.item)
      setEventCategory(response.data.categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCategoryEvent = useCallback(async (id?: number) => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/eventos/categorias/${id}`)
      setEventCategory(response.data.collection)
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
          event,
          eventCategory,
          fetchEvents,
          fetchEvent,
          fetchCategoryEvent,
        }),
        [
          isLoading,
          events,
          event,
          eventCategory,
          fetchEvents,
          fetchEvent,
          fetchCategoryEvent,
        ],
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
