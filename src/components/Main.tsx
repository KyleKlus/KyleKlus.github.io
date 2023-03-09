/** @format */
import styles from '@/styles/Main.module.css';

interface IMainProps { }

export default function Main(props: React.PropsWithChildren<IMainProps>) {
  return <main className={styles.main}>{props.children}</main>;
}
