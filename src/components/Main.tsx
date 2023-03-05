/** @format */
import styles from '@/styles/Main.module.css';
import { useEffect, useRef } from 'react';

interface IMainProps {}

export default function Main(props: React.PropsWithChildren<IMainProps>) {
  return <main className={styles.main}>{props.children}</main>;
}
