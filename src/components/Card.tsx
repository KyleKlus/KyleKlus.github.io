/** @format */
import styles from '@/styles/Card.module.scss';

interface ICardProps {
  className?: string;
}

export default function Card(props: React.PropsWithChildren<ICardProps>) {
  return (
    <div className={styles.card + ' ' + props.className}>{props.children}</div>
  );
}
