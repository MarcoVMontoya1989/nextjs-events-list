import styles from '../styles/Base.module.scss';

import {getAllEvents} from "../dummy-data";

import EventListComponent from "../components/events/EventList.component";

export default function Home() {
  return (
    <div className={''}>
      <h1 className={''}>Home Page</h1>
      <EventListComponent items={getAllEvents()} />
    </div>
  )
};
