import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventItemComponent from "../../components/events/EventItem.component";
import Error404 from "../404";

const EventId = (props) => {

  const router = useRouter();
  const eventId = router.query.eventId;
  const eventGet = getEventById(eventId);

  return (
    <div>
      {eventGet ? <EventItemComponent item={eventGet} /> : <Error404 />}
    </div>
  );
};

export default EventId;