import EventItemComponent from "./EventItem.component";
import styles from '/styles/Base.module.scss';

const EventListComponent = (props) => {

  let {event} = props.items;

  if(!event) {
    event = props.items
  }

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
