/** @format */
import styles from '@/styles/Home.module.scss';

interface IIndexMainProps {}

export default function IndexMain(
  props: React.PropsWithChildren<IIndexMainProps>
) {
  return <main className={styles.main}>{props.children}</main>;
}
