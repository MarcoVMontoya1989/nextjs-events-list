import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Base.module.scss';

const MainHeaderComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={'/'}>NextJS Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href={'/events'}>Browse All Events</Link>
          </li>
          {/*<li>*/}
          {/*  <Link href={'/'}></Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link href={'/'}></Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
      
    </header>
  );
};

export default MainHeaderComponent;