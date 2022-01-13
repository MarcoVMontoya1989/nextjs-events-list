import styles from '../styles/Base.module.scss';
import {getAllEvents} from "../dummy-data";
import EventListComponent from "../components/events/EventList.component";
import {getAllEventsFetch} from "../helpers/api-utils";

export default function Home(props) {

  const {featuredEvents} = props;

  return (
    <div className={''}>
      <EventListComponent items={featuredEvents} />
    </div>
  )
};

export async function getStaticProps() {

  const results = await getAllEventsFetch();

  const mapEvents = results.map(test => {
    return {
      id: test.id,
      description: test.description,
      image: test.image,
      isFeatured: test.isFeatured,
      location: test.location,
      title: test.title,
      date: test.date
    }
  });

  return {
    props: {
      featuredEvents: {
        event: mapEvents
      }
    },
    revalidate: 1800
  }
}
