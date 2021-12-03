import {Fragment} from "react";
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventSummary from "../../components/events/EventDetail/event-summary";
import EventLogistics from "../../components/events/EventDetail/event-logistics";
import EventContent from "../../components/events/EventDetail/event-content";
import ErrorAlert from "../../components/events/ErrorAlert/error-alert";

const EventId = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventGet = getEventById(eventId);

  console.log('routers', router.query);
  console.log('get item', eventGet);

  const eventCardContent = (
    <Fragment>
      <EventSummary title={eventGet.title} />
      <EventLogistics item={eventGet} />
      <EventContent>
        {eventGet.description}
      </EventContent>
    </Fragment>
  );

  return (
    <Fragment>
      {eventGet ? eventCardContent : <ErrorAlert /> }
    </Fragment>
  );
};

export default EventId;
