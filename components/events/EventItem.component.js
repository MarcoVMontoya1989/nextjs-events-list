import Link from 'next/link';
import styles from '/styles/Base.module.scss';

const EventItemComponent = (props) => {

  const {title, date, location, id, image} = props.item;

  const dateTime = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  console.log('item file', title, date, id, image);

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
     <li className={styles.item}>
       <img src={`/${image}`} alt={title}/>
       <div className={styles.content}>
         <div>
           <h2>{title}</h2>
           <div className={styles.date}>
             <time>{dateTime}</time>
           </div>
           <div className={styles.address}>
             <address>{formattedAddress}</address>
           </div>
         </div>
         <div className={styles.actions}>
           <Link href={exploreLink}>Explore Event</Link>
         </div>
       </div>
     </li>
  );
};

export default EventItemComponent;