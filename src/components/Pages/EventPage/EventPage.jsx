import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import { EventsContext, TopicsContext } from '../../../shared/state';
import { EventCard, Tags, DetailAttribute } from '../../../containers/Card';
import { Map, LocationMarker } from '../../../shared/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faLocationArrow,
  faEnvelopeOpenText,
  faTags,
  faUser,
  faCalendar,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { isDateFuture } from '../../../shared/service';

const EventPage = () => {
  const { eventId } = useParams();
  const { events } = useContext(EventsContext);

  const event = events.find((event) => event.id.toString() === eventId);

  const { topics } = useContext(TopicsContext);
  const topic = topics.find((topic) => topic.id === event.discussionId);
  const history = useHistory();

  return (
    <GenericPage header={event.header}>
      <div className="card">
        <DetailAttribute>
          <div className="is-flex is-align-items-center">
            <span className={`tag ${isDateFuture(event.date) ? 'is-info' : 'is-success'}`}>
              {isDateFuture(event.date) ? 'Грядущее' : 'Завершенное'}
            </span>
            {topic && (
              <button
                className="ml-5 button is-small"
                onClick={() => history.push(`/discussions/${topic.id}`)}
              >
                <span className="mr-2">Перейти к обсуждению</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
            {!topic && <span className="ml-5 tag is-light">{'Обсуждение не создавалось'}</span>}
          </div>
        </DetailAttribute>
        <DetailAttribute icon={faUser}>{event.author}</DetailAttribute>
        <DetailAttribute icon={faCalendar}>{event.date.toLocaleDateString()}</DetailAttribute>
        <DetailAttribute icon={faTags}>
          <Tags tags={event.tags} />
        </DetailAttribute>
        <DetailAttribute icon={faEnvelopeOpenText}>{event.text}</DetailAttribute>
        <DetailAttribute icon={faLocationArrow}>{event.address}</DetailAttribute>
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
