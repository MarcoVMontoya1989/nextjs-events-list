import {Fragment} from "react";
import {getFilteredEvents} from "../../helpers/api-utils";
import {useRouter} from "next/router";
import EventListComponent from "../../components/events/EventList.component";
import ResultsTitle from "../../components/events/ResultsTitle/results-title";
import ButtonComponent from "../../components/Utils/Button.component";
import ErrorAlert from "../../components/events/ErrorAlert/error-alert";


const FilteredEvents = (props) => {

  const {hasError, events, date} = props;

  const router = useRouter();
  const routerProps = router.query.slug;

  if(!routerProps) {
    return <ErrorAlert><p className={'center'}>Loading...</p></ErrorAlert>
  }

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>
            Invalid filter. Please adjust values.
          </p>
        </ErrorAlert>
        <div className="center">
          <ButtonComponent link={'/events'}>Show All Events</ButtonComponent>
        </div>
      </Fragment>
    )
  }

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <ButtonComponent link={'/events'}>Show All Events</ButtonComponent>
        </div>
      </Fragment>
    );
  }

  const dateCurrent = new Date(date.year, date.month - 1);

  return (
    <div>
      <ResultsTitle date={dateCurrent} />
      <EventListComponent items={events} />
    </div>
  );
};

export async function getServerSideProps(context) {

  const {params} = context;

  const filterData = params.slug;

  const yearProp = filterData[0];
  const monthProp = filterData[1];

  const numYear = +yearProp;
  const numMonth = +monthProp;

  if (isNaN(numYear) || isNaN(numMonth)
    || numYear > 2030 || numYear < 2020
    || numMonth < 1 || numMonth > 12) {
    return {
      props: {
        hasError: true
      }
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    }
  }

  const eventsFiltered = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      events: eventsFiltered,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}

export default FilteredEvents;