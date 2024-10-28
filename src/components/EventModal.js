// import React from 'react';
// import './EventModal.css';

// function EventModal({ event, onClose }) {
//   if (!event) return null;
//   return (
//     <div className="modal-overlay animate__animated animate__fadeIn" onClick={onClose}>
//       <div className="modal-content animate__animated animate__fadeInDown" onClick={(e) => e.stopPropagation()}>
//         <h2>{event.name}</h2>
//         <p>{event.date} - {event.location}</p>
//         <img src={event.image} alt={event.name} />
//         <p>{event.description}</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default EventModal;
import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <img className="modal-image" src={event.image} alt={event.name} />
      </div>
    </div>
  );
};

export default EventModal;

