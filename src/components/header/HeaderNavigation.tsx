/** @format */
import styles from '@/styles/header/Header.module.scss';
import dynamic from 'next/dynamic';
import MenuButton from '../buttons/MenuButton';
import Menu from './Menu';
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
      <MenuButton />
      <Menu />
    </nav>
  );
}
