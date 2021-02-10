import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import { EventsContext } from '../../../shared/state';
import { EventCard } from '../../../containers/Card';
import { Map, LocationMarker } from '../../../shared/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const EventPage = () => {
  const { eventId } = useParams();
  const { events } = useContext(EventsContext);

  const event = events.find((event) => event.id.toString() === eventId);

  return (
    <GenericPage header={event.header}>
      <EventCard {...event} />

      <div className="card">
        <div className="column">
          <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
          <span className="mx-2">{event.address}</span>
        </div>
        <Map center={event.position}>
          {event.position && <LocationMarker position={event.position} />}
        </Map>
        <div className="column">
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
          <span className="mx-2">Количество участников</span>
          <span className="tag has-text-weight-semibold	">{event.eventData.peopleGoing}</span>
        </div>
      </div>
    </GenericPage>
  );
};

export default EventPage;
