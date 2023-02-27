/** @format */

import styles from '@/styles/header/Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import Logo from './Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderNavigation />
    </header>
  );
}
