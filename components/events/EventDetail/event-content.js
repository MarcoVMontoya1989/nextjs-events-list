import classes from '../../../styles/Components/EventContent.module.scss';

function EventContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
