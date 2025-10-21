/** @format */

import Footer, { IFooterProps } from './Footer';
import styles from './Footer.module.css';

export interface IBigFooterProps extends IFooterProps {
}

export default function BigFooter(props: IBigFooterProps) {
  return (
    <Footer className={[styles.bigFooter, props.className].join(' ')} {...props}>
      {props.children}
    </Footer>
  );
}
