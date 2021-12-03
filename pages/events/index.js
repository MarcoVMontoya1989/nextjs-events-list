import EventListComponent from "../../components/events/EventList.component";
import {getAllEvents} from "../../dummy-data";
import EventSearchComponent from "../../components/events/EventSearch.component";
import {useRouter} from "next/router";

const Index = () => {
  const allEvents = getAllEvents();
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
      <EventListComponent items={allEvents} />
    </div>
  );
};

export default Index;
