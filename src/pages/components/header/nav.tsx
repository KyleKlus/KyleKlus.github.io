/** @format */
import styles from '@/styles/Header.module.scss';
import dynamic from 'next/dynamic';
import MenuButton from '../buttons/menuButton';
import NavLink from './navLink';

const ThemeButton = dynamic(() => import('../buttons/themeButton'), {
  ssr: false,
});

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
