/** @format */

import styles from '@/styles/Header.module.scss';
import Navigation from './nav';
import Logo from './logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
