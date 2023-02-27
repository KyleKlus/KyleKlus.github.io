/** @format */
import styles from '@/styles/header/sideNavigation/SideNavigation.module.scss';
import { useState } from 'react';
import SideNavigationMenu from './SideNavigationMenu';

interface ISideNavigationProps {}

export default function SideNavigation(
  props: React.PropsWithChildren<ISideNavigationProps>
) {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  return (
    <div
      className={styles.sideNav}
      onClick={() => {
        setIsSideBarActive(!isSideBarActive);
      }}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <SideNavigationMenu isActive={isSideBarActive} />
      {props.children}
    </div>
  );
}
