/** @format */

import styles from './Footer.module.css';
import { defaultSiteConfig } from '@/app/defaultSiteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';

export interface IFooterProps extends React.PropsWithChildren {
  className?: string;
  overrideDefaultContent?: boolean;
}

export default function Footer(props: IFooterProps) {
  return (
    <footer className={[styles.footer, props.className].join(' ')}>
      {props.overrideDefaultContent
        ? props.children
        : <div className={styles.footerContent}>
          <span>
            {'Copyright © 2024 '}
            <StyledLink href={defaultSiteConfig.githubUrl} className={['hoverBGEffect'].join(' ')} style={{ padding: '0 2px' }}>Kyle Klus</StyledLink>
          </span>
          <div className={styles.navLinkWrapper}>
            {props.children}
          </div>
        </div>
      }
    </footer>
  );
}
