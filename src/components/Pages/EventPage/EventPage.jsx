import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import { EventsContext } from '../../../shared/state';
import { EventCard } from '../../../containers/Card';
import { Map } from '../../../shared/components';

const EventPage = () => {
  const { eventId } = useParams();
  const { events } = useContext(EventsContext);
  const { dispatch } = useContext(EventsContext);

  const event = events.find((event) => event.id.toString() === eventId);

  return (
    <GenericPage header={event.header}>
      <EventCard {...event} />
      <Map />
    </GenericPage>
  );
};

export default EventPage;
