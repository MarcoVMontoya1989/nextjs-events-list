import styles from '../../styles/Base.module.scss';
import Link from 'next/link';

const ButtonComponent = (props) => {

  if(props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonComponent;