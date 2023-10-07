import React, { useEffect, useState } from "react";
import EventsAPI from "../services/EventsAPI";
import LocationsAPI from "../services/LocationsAPI";
import Event from "../components/Event";
import "../css/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState("all");
  const [loading, setLoading] = useState(true);


  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await EventsAPI.getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = location === "all" ? events : events.filter((event) => event.location === parseInt(location));
  console.log(filteredEvents)
  return (
    <div className="events-container">
    
    <div class="event-filters">
    <select value={location} onChange={handleLocationChange}>
    <option value="all">See events at . . .</option>
    <option value="1">MadisonSquareGarden</option>
    <option value="2">Central Park</option>
    <option value="3">Bowery Ballroom</option>
    <option value="4">Apollo Theater</option>
    </select>
    <button onClick={() => setLocation("all")}>Show All Events</button></div>
      {loading ? (
        <h2>Loading...</h2>
      ) : filteredEvents.length > 0 ? (
        filteredEvents.map((event) => <Event key={event.id} event={event} />)
      ) : (
        <h2>
          <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
          {"No events found!"}
        </h2>
      )}
    </div>
  );
};

export default Events;
