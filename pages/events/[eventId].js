import {Fragment} from "react";
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventItemComponent from "../../components/events/EventItem.component";
import Error404 from "../404";
import EventSummary from "../../components/events/EventDetail/event-summary";
import EventLogistics from "../../components/events/EventDetail/event-logistics";
import EventContent from "../../components/events/EventDetail/event-content";

const EventId = (props) => {

  const router = useRouter();
  const eventId = router.query.eventId;
  const eventGet = getEventById(eventId);

  return (
    <Fragment>
      {eventGet ? <EventItemComponent item={eventGet} /> : <Error404 />}
      <EventSummary />
      <EventContent>

      </EventContent>
    </Fragment>
  );
};

export default EventId;