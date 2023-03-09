/** @format */

import styles from '@/styles/header/Header.module.css';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import SideNavigationButton from '../buttons/SideNavigationButton';
import HeaderNavigation from './HeaderNavigation';
import Logo from './Logo';
import SideNavigation from './SideNavigation';

export default function Header() {
  const [isSideNavigationActive, setIsSideNavigationActive] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScroll = useRef(0);

  const isHeaderHiddenClassName = useRef('');
  const isActiveClassName = isSideNavigationActive
    ? styles.isWrapperActive
    : '';

  useEffect(() => {
    function hideAndShowHeader() {
      if (isSideNavigationActive) {
        return;
      }
      const currentScrollPos = window.pageYOffset;
      const lastScrollPos = lastScroll.current;
      lastScroll.current = currentScrollPos;

      if (currentScrollPos <= 0) {
        isHeaderHiddenClassName.current = '';
        setIsHeaderHidden(false);
      } else if (currentScrollPos > lastScrollPos) {
        // down
        isHeaderHiddenClassName.current = styles.isHidden;
        setIsHeaderHidden(true);
      } else if (currentScrollPos < lastScrollPos) {
        // up
        isHeaderHiddenClassName.current = styles.isVisible;
        setIsHeaderHidden(false);
      }
    }
    window.addEventListener('scroll', hideAndShowHeader);
    return () => {
      window.removeEventListener('scroll', hideAndShowHeader);
    };
  }, [isSideNavigationActive]);

  return (
    <header className={styles.header + ' ' + isHeaderHiddenClassName.current}>
      <div className={styles.headerLeft}>
        <SideNavigationButton
          onClick={() => {
            setIsSideNavigationActive(!isSideNavigationActive);
            if (!isSideNavigationActive) {
              isHeaderHiddenClassName.current = '';
              setIsHeaderHidden(false);
            }
          }}
        />
        <div
          className={
            styles.sideNavigationNegativeSpace + ' ' + isActiveClassName
          }
          onClick={() => {
            if (!isSideNavigationActive) {
              return;
            }
            setIsSideNavigationActive(false);
          }}
        ></div>
        <SideNavigation isActive={isSideNavigationActive} />
        <Logo />
      </div>
      <HeaderNavigation />
    </header>
  );
}
