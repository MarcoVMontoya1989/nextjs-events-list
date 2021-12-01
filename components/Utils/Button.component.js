import styles from '../../styles/Base.module.scss';
import Link from 'next/link';

const ButtonComponent = (props) => {
  return (
    <Link href={props.link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default ButtonComponent;