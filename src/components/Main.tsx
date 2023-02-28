/** @format */
import styles from '@/styles/Main.module.scss';

interface IMainProps {}

export default function Main(props: React.PropsWithChildren<IMainProps>) {
  return <main className={styles.main}>{props.children}</main>;
}
