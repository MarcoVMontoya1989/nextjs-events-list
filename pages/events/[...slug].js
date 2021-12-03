import {getFilteredEvents} from "../../dummy-data";
import {useRouter} from "next/router";
import EventListComponent from "../../components/events/EventList.component";

const FilteredEvents = () => {

  const router = useRouter();
  const routerProps = router.query.slug;

  const yearProp = routerProps[0];
  const monthProp = routerProps[1];
  const numYear = +yearProp;
  const numMonth = +monthProp;


  if(!routerProps) {
    return <p className={'center'}>Loading...</p>
  }

  if (isNaN(numYear) || isNaN(numMonth)
    || numYear > 2030 || numYear < 2020
    || numMonth < 1 || numMonth > 12) {
    return (
      <p>
        Invalid filter. Please adjust values.
      </p>
    )
  }

  const eventsFiltered = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!eventsFiltered || eventsFiltered.length === 0) {
    return (<p>No events found for the chosen filter</p>)
  }

  return (
    <div>
      <EventListComponent items={eventsFiltered} />
    </div>
  );
};

export async function getStaticProps() {

  const events = ["2020/12", "2021/9"];

  return {
    props: { events: events },
  };
}

export async function getStaticPaths() {
  const events = ["2020/12", "2021/9"];
  const paths = events.map((event) => ({
    params: { slug: [event] },
  }));

  return { paths, fallback: false };
}

export default FilteredEvents;