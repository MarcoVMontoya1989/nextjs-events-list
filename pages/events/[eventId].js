import {Fragment} from "react";
import {getAllEventsFetch, getEventById, getFeaturedEvents} from "../../helpers/api-utils";
import EventSummary from "../../components/events/EventDetail/event-summary";
import EventLogistics from "../../components/events/EventDetail/event-logistics";
import EventContent from "../../components/events/EventDetail/event-content";
import ErrorAlert from "../../components/events/ErrorAlert/error-alert";

const EventDetailedPage = (props) => {
  const {selectedEvent} = props;

  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const eventGet = getEventById(eventId);

  const eventCardContent = (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics item={selectedEvent} />
      <EventContent>
        {selectedEvent.description}
      </EventContent>
    </Fragment>
  );

  return (
    <Fragment>
      {selectedEvent ? eventCardContent : <ErrorAlert>Not Found!</ErrorAlert> }
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const resultEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent: resultEvent
    },
    revalidate: 1500,
  }
}

export async function getStaticPaths() {

  const allEvents = await getFeaturedEvents();

  const allPaths = allEvents.map(events => ({
    params: {
      eventId: events.id
    }
  }));

  return {
    paths: allPaths,
    fallback: true
  }
}

export default EventDetailedPage;
