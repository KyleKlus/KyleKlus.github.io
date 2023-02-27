/** @format */

import styles from '@/styles/header/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink(props: {
  pathName: string;
  displayText: string;
}) {
  const router = useRouter();
  const styleClass =
    router.pathname === props.pathName ? styles.isCurrentWindow : '';

  return (
    <Link
      className={styles.navLink + ' ' + styleClass}
      href={props.pathName}
    >
      {props.displayText}
    </Link>
  );
}
