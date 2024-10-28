import React from 'react';
import './EventCard.css';

function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <h2>{event.name}</h2>
      <p>{event.date} - {event.location}</p>
    </div>
  );
}

export default EventCard;
