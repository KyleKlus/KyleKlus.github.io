/** @format */
import styles from '@/styles/header/SideNavigation.module.scss';
import NavLink from './NavLink';

export default function SideNavigation() {
  return (
    <nav className={styles.sideNav}>
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
    </nav>
  );
}
