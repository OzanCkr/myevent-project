import React from "react";
import { EventList } from "../helpers/EventList";
import EventItem from "../components/EventItem";
import "../styles/Events.css";

function Events() {
  return (
    <div className="events">
      <h1 className="eventTitle">Upcoming Shows</h1>
      <div className="eventList">
        {EventList.map((eventItem, key) => {
          return (
            <EventItem
              key={key}
              name={eventItem.name}
              description={eventItem.description}
              image={eventItem.image}
              price={eventItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
