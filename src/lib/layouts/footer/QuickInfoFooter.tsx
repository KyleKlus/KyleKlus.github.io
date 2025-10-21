/** @format */

import styles from './Footer.module.css';
import { defaultSiteConfig } from '@/app/defaultSiteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';
import SmallFooter, { ISmallFooterProps } from './SmallFooter';

interface IQuickInfoFooterProps extends ISmallFooterProps {
}

export default function QuickInfoFooter(props: IQuickInfoFooterProps) {
  return (
    <SmallFooter className={[props.className].join(' ')} {...props}>
      <StyledLink href={defaultSiteConfig.heropageUrl} className={styles.footerNavLink}>Home</StyledLink>
      <StyledLink href={defaultSiteConfig.portfoliopageUrl} className={styles.footerNavLink}>Portfolio</StyledLink>
      <StyledLink href={defaultSiteConfig.aboutpageUrl} className={styles.footerNavLink}>About</StyledLink>
      <StyledLink href={defaultSiteConfig.githubUrl} className={styles.footerNavLink}>GitHub</StyledLink>
      <StyledLink href={defaultSiteConfig.linkedinUrl} className={styles.footerNavLink}>LinkedIn</StyledLink>
      <StyledLink href={defaultSiteConfig.kofiUrl} className={styles.footerNavLink}>Ko-fi</StyledLink>
      <StyledLink href={defaultSiteConfig.contactUrl} className={styles.footerNavLink}>Contact</StyledLink>
      <StyledLink href={defaultSiteConfig.privacyUrl} className={styles.footerNavLink}>Privacy</StyledLink>
      <StyledLink href={defaultSiteConfig.termsOfServiceUrl} className={styles.footerNavLink}>Terms of Service</StyledLink>
      {props.children}
    </SmallFooter>
  );
}
