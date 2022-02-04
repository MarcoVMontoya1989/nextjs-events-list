import EventListComponent from "../../components/events/EventList.component";
// import {getAllEvents} from "../../dummy-data";
import EventSearchComponent from "../../components/events/EventSearch.component";
import {useRouter} from "next/router";
import {getAllEventsFetch} from "../../helpers/api-utils";

const AllEventsPage = (props) => {

  const {events} = props;
  const router = useRouter();

  const FilterSearchValue = (value) => {
    const {year, month} = value;

    router.push({
      pathname: '/events/[year]/[month]',
      query: {
        year: year,
        month: month
      }
    });
  }

  return (
    <div>
      <EventSearchComponent submitFilter={FilterSearchValue} />
      <EventListComponent items={events} />
    </div>
  );
};

export async function getStaticProps(context) {
  const allEvents = await getAllEventsFetch();

  return {
    props: {
      events: allEvents
    },
    revalidate: 60
  }
}

// export async function getStaticPaths() {
//
// }

export default AllEventsPage;
