/** @format */
import Footer, { IFooterProps } from './Footer';
import styles from './Footer.module.css';

export interface ISmallFooterProps extends IFooterProps {
}

export default function SmallFooter(props: React.PropsWithChildren<ISmallFooterProps>) {
  return (
    <Footer className={[styles.smallFooter, props.className].join(' ')} {...props}>
      {props.children}
    </Footer>
  );
}
