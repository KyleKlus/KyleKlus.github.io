/** @format */
import styles from './ScrollUpButton.module.css';
import Image from 'next/image';
import scrollUpSVG from './up-arrow.svg';

interface IScrollUpButtonProps {
  isVisible: boolean;
}

export default function ScrollUpButton(
  props: React.PropsWithChildren<IScrollUpButtonProps>
) {
  const isVisibleClassName = props.isVisible ? ' ' + styles.isVisible : '';
  return (
    <button
      className={styles.scrollButton + isVisibleClassName}
      onClick={() => {
        const top = document.getElementById('top');
        if (top) { top.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }
      }}
    >
      <Image id={'scroll-up-button-image'} className={[styles.image].join(' ')} alt='ScrollUpArrow' src={scrollUpSVG} width={22} height={22}></Image>
      {props.children}
    </button>
  );
}
