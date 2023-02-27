/** @format */
import styles from '@/styles/header/sideNavigation/SideNavigationMenu.module.scss';
import NavLink from '../NavLink';

interface ISideNavigationProps {
  isActive: boolean;
}
export default function SideNavigationMenu(
  props: React.PropsWithChildren<ISideNavigationProps>
) {
  const isActiveClassName = props.isActive ? styles.isActive : '';
  return (
    <nav className={styles.sideNavMenu + ' ' + isActiveClassName}>
      <NavLink
        className={styles.sideNavLink}
        pathName="/"
        displayText="Home"
      />
      <NavLink
        className={styles.sideNavLink}
        pathName="/portfolio"
        displayText="Portfolio"
      />
      <NavLink
        className={styles.sideNavLink}
        pathName="/about"
        displayText="About"
      />
    </nav>
  );
}
