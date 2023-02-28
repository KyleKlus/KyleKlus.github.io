/** @format */
import styles from '@/styles/header/SideNavigation.module.scss';
import Card from '../Card';
import Logo from './Logo';
import NavLink from './NavLink';

interface ISideNavigationProps {
  isActive: boolean;
}
export default function SideNavigation(
  props: React.PropsWithChildren<ISideNavigationProps>
) {
  const isActiveClassName = props.isActive ? styles.isActive : '';
  return (
    <nav className={styles.sideNavMenu + ' ' + isActiveClassName}>
      <Card className={styles.menuCard}>
        <h4>Website</h4>
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
      </Card>

      <Card className={styles.menuCard}>
        <h4>Other Sites</h4>
        <NavLink
          className={styles.sideNavLink}
          pathName="/projects"
          displayText="Projects"
        />
        <NavLink
          className={styles.sideNavLink}
          pathName="/Kyles-Cookbook"
          displayText="Cookbook"
        />
      </Card>

      <Card className={styles.menuCard}>
        <h4>Other Sites</h4>
        <NavLink
          className={styles.sideNavLink}
          pathName="/projects"
          displayText="Projects"
        />
        <NavLink
          className={styles.sideNavLink}
          pathName="/Kyles-Cookbook"
          displayText="Cookbook"
        />
      </Card>

      <Card className={styles.menuCard}>
        <h4>Other Sites</h4>
        <NavLink
          className={styles.sideNavLink}
          pathName="/projects"
          displayText="Projects"
        />
        <NavLink
          className={styles.sideNavLink}
          pathName="/Kyles-Cookbook"
          displayText="Cookbook"
        />
      </Card>

      <Card className={styles.menuCard}>
        <h4>Other Sites</h4>
        <NavLink
          className={styles.sideNavLink}
          pathName="/projects"
          displayText="Projects"
        />
        <NavLink
          className={styles.sideNavLink}
          pathName="/Kyles-Cookbook"
          displayText="Cookbook"
        />
      </Card>

      <Card className={styles.menuCard}>
        <h4>Other Sites</h4>
        <NavLink
          className={styles.sideNavLink}
          pathName="/projects"
          displayText="Projects"
        />
        <NavLink
          className={styles.sideNavLink}
          pathName="/Kyles-Cookbook"
          displayText="Cookbook"
        />
      </Card>
      <Card className={styles.menuCard}>
        <h4>Other Sites</h4>
        <NavLink
          className={styles.sideNavLink}
          pathName="/projects"
          displayText="Projects"
        />
        <NavLink
          className={styles.sideNavLink}
          pathName="/Kyles-Cookbook"
          displayText="Cookbook"
        />
      </Card>
    </nav>
  );
}
