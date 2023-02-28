/** @format */
import styles from '@/styles/header/HeaderNavigation.module.scss';
import dynamic from 'next/dynamic';
import SideNavigationButton from '../buttons/SideNavigationButton';
import NavLink from './NavLink';
import { useState } from 'react';
import SideNavigation from './SideNavigation';

const ThemeButton = dynamic(() => import('../buttons/ThemeButton'), {
  ssr: false,
});

export default function HeaderNavigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        pathName="/"
        displayText="Home"
      />
      <NavLink
        pathName="/portfolio"
        displayText="Portfolio"
      />
      <NavLink
        pathName="/about"
        displayText="About"
      />
      <ThemeButton />
    </nav>
  );
}
