import Image from 'next/image';
import AddressIcon from '../../icons/address-icon';
import DateIcon from '../../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from '../../../styles/Components/EventLogistics.module.scss';

function EventLogistics(props) {

  const { date, location, image, title } = props.item;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = location.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={title} width={250} height={160} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
