import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import { EventsContext } from '../../../shared/state';
import { EventCard } from '../../../containers/Card';
import { Map, LocationMarker } from '../../../shared/components';

const EventPage = () => {
  const { eventId } = useParams();
  const { events } = useContext(EventsContext);

  const event = events.find((event) => event.id.toString() === eventId);

  return (
    <GenericPage header={event.header}>
      <div className="block">
        <EventCard {...event} />
      </div>

      <div className="card">
        <div className="column">{event.address}</div>
        <Map center={event.position}>
          {event.position && <LocationMarker position={event.position} />}
        </Map>
      </div>
    </GenericPage>
  );
};

export default EventPage;
