import {getFilteredEvents} from "../../dummy-data";
import {useRouter} from "next/router";
import EventListComponent from "../../components/events/EventList.component";
import ResultsTitle from "../../components/events/ResultsTitle/results-title";
import ButtonComponent from "../../components/Utils/Button.component";
import ErrorAlert from "../../components/events/ErrorAlert/error-alert";

const FilteredEvents = () => {

  const router = useRouter();
  const routerProps = router.query.slug;
  const yearProp = routerProps[0];
  const monthProp = routerProps[1];
  const numYear = +yearProp;
  const numMonth = +monthProp;

  if(!routerProps) {
    return <ErrorAlert><p className={'center'}>Loading...</p></ErrorAlert>
  }

  //possible bug ?

  if (isNaN(numYear) || isNaN(numMonth)
    || numYear > 2030 || numYear < 2020
    || numMonth < 1 || numMonth > 12) {
    return (
      <ErrorAlert>
        <p>
          Invalid filter. Please adjust values.
        </p>
      </ErrorAlert>
    )
  }

  const eventsFiltered = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!eventsFiltered || eventsFiltered.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <ButtonComponent link={'/events'}>Show All Events</ButtonComponent>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventListComponent items={eventsFiltered} />
    </div>
  );
};

export async function getStaticProps() {

  const events = ["2020/12", "2021/9"];

  return {
    props: { slug: events },
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