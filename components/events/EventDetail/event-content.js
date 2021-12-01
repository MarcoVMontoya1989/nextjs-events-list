import classes from '../../../styles/Base.module.scss';

function EventContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
