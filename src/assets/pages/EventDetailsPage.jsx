import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../styles/EventDetail.css' 

const EventDetailsPage = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  const getEvents = async () => {
    const res = await fetch(
      `https://eventapiservice-hbb5bpc8a4h0hec5.swedencentral-01.azurewebsites.net/api/Events/${id}`
    )
    if (res.ok) {
      const response = await res.json()
      setEvent(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  if (!event) return <div>Loading...</div>

  const eventDate = new Date(event.eventDate)

  return (
    <div className="event-details-container">
      <h2 className="event-details-title">Event Details</h2>

      <div className="event-banner">
        <img
          src={event.image || 'https://via.placeholder.com/700x350?text=Event+Image'}
          alt={event.title}
          className="event-details-image"
        />
      </div>

      <div className="event-info">
        <div className="event-header">
          <h3>{event.title}</h3>
          <span className="event-price">Starts from $100</span>
        </div>

        <div className="event-meta">
          <p>
            🗓️ {eventDate.toLocaleDateString()} at{' '}
            {eventDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <p>📍 {event.location}</p>
        </div>

        <div className="event-section">
          <h4>About Event</h4>
          <p>{event.description}</p>
        </div>

        <div className="event-section">
          <h4>Terms & Conditions</h4>
          <ul>
            <li>All attendees must possess a valid ticket for entry.</li>
            <li>Tickets are non-refundable and non-transferable unless specified.</li>
            <li>
              Attendees must present a valid government-issued ID at the gate.
            </li>
          </ul>
        </div>

        <Link to={`/events/booking/${id}`} className="book-button">
          Book This Event
        </Link>
      </div>
    </div>
  )
}

export default EventDetailsPage
