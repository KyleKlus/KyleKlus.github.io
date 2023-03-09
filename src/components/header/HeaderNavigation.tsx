/** @format */
import styles from '@/styles/header/HeaderNavigation.module.css';
import dynamic from 'next/dynamic';
import NavLink from './NavLink';

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
