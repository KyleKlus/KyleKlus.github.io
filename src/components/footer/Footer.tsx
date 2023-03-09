/** @format */

import styles from '@/styles/footer/Footer.module.css';
import Link from 'next/link';
import NavLink from '../header/NavLink';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          Copyright © 2023{' '}
          <Link href={'https://github.com/MajorEnkidu'}>Kyle Klus</Link>
        </p>
        <div className={styles.navLinkWrapper}>
          <NavLink
            className={styles.sideNavLink + ' ' + styles.footerNavLink}
            pathName="/"
            displayText="Home"
          />
          <NavLink
            className={styles.sideNavLink + ' ' + styles.footerNavLink}
            pathName="/portfolio"
            displayText="Portfolio"
          />
          <NavLink
            className={styles.sideNavLink + ' ' + styles.footerNavLink}
            pathName="https://github.com/MajorEnkidu"
            displayText="GitHub"
          />
          <NavLink
            className={styles.sideNavLink + ' ' + styles.footerNavLink}
            pathName="/about"
            displayText="Ko-fi"
          />
          <NavLink
            className={styles.sideNavLink + ' ' + styles.footerNavLink}
            pathName="https://ko-fi.com/majorenkidu"
            displayText="About"
          />
          <NavLink
            className={styles.sideNavLink + ' ' + styles.footerNavLink}
            pathName="mailto:kyle.klus.2@gmail.com"
            displayText="Contact"
          />
        </div>
      </footer>
    </>
  );
}
