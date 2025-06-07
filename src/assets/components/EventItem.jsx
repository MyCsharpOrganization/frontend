import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/EventItem.css'

const EventItem = ({ item }) => {
    const eventDate = new Date(item.eventDate)

  return (
  
    <Link to={`/events/${item.id}`} className="event-card">
      
      <div className="event-image-container">
        <img
          src={item.image || 'https://via.placeholder.com/300x180?text=No+Image'}
          alt={item.title}
          className="event-image"
          
        />

      </div>
      <div className="event-info">
        <div className="event-date">
          {eventDate.toLocaleDateString()} at{' '}
          {eventDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        <div className="event-title">{item.title}</div>
        <div className="event-location">{item.location}</div>
      </div>
    </Link>
  )
}

export default EventItem
