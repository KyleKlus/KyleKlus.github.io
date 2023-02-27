/** @format */
import styles from '@/styles/header/Header.module.scss';
import NavLink from './NavLink';

export default function Menu() {
  return (
    <nav className={styles.menu}>
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
