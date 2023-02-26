/** @format */
import styles from '@/styles/MenuButton.module.scss';

interface IMenuButtonProps {}

export default function MenuButton(
  props: React.PropsWithChildren<IMenuButtonProps>
) {
  return (
    <div className={styles.menuButton}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      {props.children}
    </div>
  );
}
