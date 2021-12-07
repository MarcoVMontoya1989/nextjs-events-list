import EventItemComponent from "./EventItem.component";
import styles from '/styles/Base.module.scss';

const EventListComponent = ({items}) => {
  let {event} = items;

  const itemList = (
    event.map(item  => {
      return (
        <EventItemComponent key={item.id} item={item} />
      );
    })
  );

  return (
    <ul className={styles.list}>
      {itemList}
    </ul>
  );
};

export default EventListComponent;
