/** @format */

import styles from '@/styles/header/Header.module.scss';
import { useState } from 'react';
import SideNavigationButton from '../buttons/SideNavigationButton';
import HeaderNavigation from './HeaderNavigation';
import Logo from './Logo';
import SideNavigation from './SideNavigation';

export default function Header() {
  const [isSideNavigationActive, setIsSideNavigationActive] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <SideNavigationButton
          onClick={() => {
            setIsSideNavigationActive(!isSideNavigationActive);
          }}
        />
        <SideNavigation isActive={isSideNavigationActive} />
        <Logo />
      </div>

      <HeaderNavigation />
    </header>
  );
}
