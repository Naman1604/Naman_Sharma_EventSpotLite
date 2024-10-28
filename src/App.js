import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import './styles/main.css';
import eventData from './data/eventsData.json';

function App() {
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mock data for events
  const events = eventData;

  // Filter events based on search criteria
  const filteredEvents = events.filter(event => {
    return (
      event.name.toLowerCase().includes(searchName.toLowerCase()) &&
      event.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Navbar
        searchName={searchName}
        searchLocation={searchLocation}
        onNameChange={(e) => setSearchName(e.target.value)}
        onLocationChange={(e) => setSearchLocation(e.target.value)}
      />
      <EventList events={filteredEvents} onEventClick={setSelectedEvent} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

export default App;
