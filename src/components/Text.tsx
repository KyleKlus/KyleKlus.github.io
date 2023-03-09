/** @format */
import styles from '@/styles/Text.module.css';

interface ITextProps { }

export default function Text(props: React.PropsWithChildren<ITextProps>) {
  return <div className={styles.text}>{props.children}</div>;
}
