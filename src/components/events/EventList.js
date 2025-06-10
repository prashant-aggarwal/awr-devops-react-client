import { useEffect, useState } from "react";
import ApplicationEvent from "./ApplicationEvent";
import * as api from '../../api';
import EventForm from "./EventForm";

const EventList = () => {

    const eventId = 1;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        api.fetchAllEvents().then((response) => {
            setEvents(response.events);
        });
    },
        [eventId]);

    const addEvent = (event) => {
        api.addEvent(event).then(data => {
            setEvents(data.events);
        });
    }

    return (
        <>
            <div className="row">
                <h2>Upcoming Events</h2>
            </div>
            {events.map(function (item) {
                return <ApplicationEvent title={item.title}
                    id={item.id}
                    description={item.description}
                    key={item.id} />;
            }
            )}

            <div className="row">
               <EventForm addEvent={addEvent} />
            </div>
        </>
    )
}

export default EventList;
