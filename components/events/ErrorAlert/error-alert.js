import classes from '../../../styles/Base.module.scss';

function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
