/** @format */

import { siteConfig } from '@/app/siteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';
import BigFooter from './BigFooter';
import styles from './Footer.module.css';

export interface ISiteMapFooterProps extends React.PropsWithChildren {
  className?: string;
}

export default function SiteMapFooter(props: ISiteMapFooterProps) {
  return (
    <BigFooter className={[styles.siteMapFooter, props.className].join(' ')} overrideDefaultContent={true}>
      <table>
        <thead>
          <tr>
            <th><h5>Sites</h5></th>
            <th><h5>Web Apps</h5></th>
            <th><h5>Social</h5></th>
            <th><h5>Legal</h5></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={[styles.linkList].join(' ')}>
                <StyledLink href={siteConfig.heropageUrl} className={styles.footerNavLink}>Home</StyledLink>
                <StyledLink href={siteConfig.portfoliopageUrl} className={styles.footerNavLink}>Portfolio</StyledLink>
                <StyledLink href={siteConfig.aboutpageUrl} className={styles.footerNavLink}>About</StyledLink>
                <StyledLink href={siteConfig.cookbookENUrl} className={styles.footerNavLink}>Cookbook 🇬🇧</StyledLink>
                <StyledLink href={siteConfig.cookbookENUrl} className={styles.footerNavLink}>Cookbook 🇩🇪</StyledLink>
                <StyledLink href={siteConfig.projectsUrl} className={styles.footerNavLink}>Projects 🛠️</StyledLink>
              </div>
            </td>
            <td>
              <div className={[styles.linkList].join(' ')}>
                <StyledLink href={siteConfig.receiptManagerUrl} className={styles.footerNavLink}>Receipt Manager 🧾</StyledLink>
                <StyledLink href={siteConfig.textToolsUrl} className={styles.footerNavLink}>Text Tools 📝</StyledLink>
                <StyledLink href={siteConfig.qrCodeGeneratorUrl} className={styles.footerNavLink}>QR Code Generator 📱</StyledLink>
              </div>
            </td>
            <td>
              <div className={[styles.linkList].join(' ')}>
                <StyledLink href={siteConfig.githubUrl} className={styles.footerNavLink}>GitHub</StyledLink>
                <StyledLink href={siteConfig.linkedinUrl} className={styles.footerNavLink}>LinkedIn</StyledLink>
                <StyledLink href={siteConfig.kofiUrl} className={styles.footerNavLink}>Ko-fi</StyledLink>
              </div>
            </td>
            <td>
              <div className={[styles.linkList].join(' ')}>
                <StyledLink href={siteConfig.contactUrl} className={styles.footerNavLink}>Contact</StyledLink>
                <StyledLink href={siteConfig.privacyUrl} className={styles.footerNavLink}>Privacy</StyledLink>
                <StyledLink href={siteConfig.termsOfServiceUrl} className={styles.footerNavLink}>Terms of Service</StyledLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span>
        {'Copyright © 2024 '}
        <StyledLink href={siteConfig.githubUrl} className={['hoverBGEffect'].join(' ')} style={{ padding: '0 2px' }}>Kyle Klus</StyledLink>
      </span>
    </BigFooter>
  );
}
