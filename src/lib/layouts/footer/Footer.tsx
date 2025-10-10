/** @format */

import Link from 'next/link';
import styles from './Footer.module.css';
import { defaultSiteConfig } from '@/app/defaultSiteConfig';

interface IFooterProps {
  className?: string;
  overrideContent?: React.ReactNode;
}

export default function Footer(props: React.PropsWithChildren<IFooterProps>) {
  return (
    <>
      <footer className={[styles.footer, props.className].join(' ')}>
        {props.overrideContent
          ? props.overrideContent
          : <div className={styles.footerContent}>
            <p>
              {'Copyright © 2024 '}
              <Link href={defaultSiteConfig.githubUrl} className={['hoverBGEffect'].join(' ')} style={{ padding: '0 2px' }}>Kyle Klus</Link>
            </p>
            <div className={styles.navLinkWrapper}>
              <Link href={defaultSiteConfig.heropageUrl} className={styles.footerNavLink}>Home</Link>
              <Link href={defaultSiteConfig.portfoliopageUrl} className={styles.footerNavLink}>Portfolio</Link>
              <Link href={defaultSiteConfig.aboutpageUrl} className={styles.footerNavLink}>About</Link>
              <Link href={defaultSiteConfig.githubUrl} className={styles.footerNavLink}>GitHub</Link>
              <Link href={defaultSiteConfig.linkedinUrl} className={styles.footerNavLink}>LinkedIn</Link>
              <Link href={defaultSiteConfig.kofiUrl} className={styles.footerNavLink}>Ko-fi</Link>
              <Link href={defaultSiteConfig.contactUrl} className={styles.footerNavLink}>Contact</Link>
              <Link href={defaultSiteConfig.privacyUrl} className={styles.footerNavLink}>Privacy</Link>
              <Link href={defaultSiteConfig.termsOfServiceUrl} className={styles.footerNavLink}>Terms of Service</Link>
              {props.children}
            </div>
          </div>
        }
      </footer>
    </>
  );
}
