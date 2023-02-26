/** @format */
import styles from '@/styles/Header.module.scss';
import MenuButton from '../buttons/menuButton';
import ThemeButton from '../buttons/themeButton';
import NavLink from './navLink';

export default function Navigation() {
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
        pathName="/projects"
        displayText="Projects"
      />
      <NavLink
        pathName="/about"
        displayText="About"
      />
      <ThemeButton />
      <MenuButton />
    </nav>
  );
}
