import Link from 'next/link';
import styles from '/styles/Base.module.scss';
import ButtonComponent from "../Utils/Button.component";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItemComponent = (props) => {

  const {title, date, location, id, image} = props.item;
  const dateTime = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
     <li className={styles.item}>
       <img src={`/${image}`} alt={title}/>
       <div className={styles.content}>
         <div>
           <h2>{title}</h2>
           <div className={styles.date}>
             <DateIcon />
             <time>{dateTime}</time>
           </div>
           <div className={styles.address}>
             <AddressIcon />
             <address>{formattedAddress}</address>
           </div>
         </div>
         <div className={styles.actions}>
           {/*<Link href={exploreLink}>Explore Event</Link>*/}
           <ButtonComponent link={exploreLink}>
             <span>Explore Event</span>
             <span className={styles.icon}><ArrowRightIcon /></span>
           </ButtonComponent>
         </div>
       </div>
     </li>
  );
};

export default EventItemComponent;