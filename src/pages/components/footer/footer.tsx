/** @format */

import { Inter } from '@next/font/google';
import styles from '@/styles/Footer.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}></footer>
    </>
  );
}
