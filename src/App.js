import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import eventsData from './data/eventsData.json';
import './styles/main.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

export default App;
