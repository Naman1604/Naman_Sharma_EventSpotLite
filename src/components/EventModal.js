import React from 'react';
import './EventModal.css';

function EventModal({ event, onClose }) {
  if (!event) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EventModal;
