import classes from '../../../styles/Components/EventSummary.module.scss';

function EventSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;