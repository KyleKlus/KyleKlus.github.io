/** @format */
import styles from '@/styles/header/HeaderNavigation.module.css';
import dynamic from 'next/dynamic';
import ScrollNavLink from './ScrollNavLink';

const ThemeButton = dynamic(() => import('../buttons/ThemeButton'), {
  ssr: false,
});

export default function HeaderNavigation() {
  return (
    <nav className={styles.nav}>
      <ScrollNavLink
        elementName="heroPage"
        displayText="Home"
      />
      <ScrollNavLink
        elementName="portfolioPage"
        displayText="Portfolio"
      />
      <ScrollNavLink
        elementName="aboutPage"
        displayText="About"
      />
      <ThemeButton />
    </nav>
  );
}
