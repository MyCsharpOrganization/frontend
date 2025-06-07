import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'
import '../../styles/EventList.css' 

const EventList = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://eventapiservice-hbb5bpc8a4h0hec5.swedencentral-01.azurewebsites.net/api/Events")
    if (res.ok) {
      const response = await res.json()
      setEvents(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <section id='events'>
      {events.map(event => (
        <EventItem key={event.id} item={event} />
      ))}
    </section>
  )
}

export default EventList
