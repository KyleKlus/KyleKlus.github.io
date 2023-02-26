/** @format */
import styles from '@/styles/ThemeButton.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

interface IThemeButtonProps {}

export default function ThemeButton(
  props: React.PropsWithChildren<IThemeButtonProps>
) {
  let prefChoice = '';
  let localStorageChoice = '';
  let choice = 'light';

  if (typeof window !== 'undefined') {
    prefChoice = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    localStorageChoice = JSON.parse(
      localStorage.getItem('themeChoice') || '{}'
    );

    choice = localStorageChoice === '{}' ? prefChoice : localStorageChoice;
    localStorage.removeItem('themeChoice');
    localStorage.setItem('themeChoice', JSON.stringify(choice));
  }

  const [theme, setTheme] = useState(choice);

  function toggleTheme() {
    switch (theme) {
      case 'dark':
        localStorage;
        window.document.body.classList.remove('dark');
        window.document.body.classList.add('light');
        localStorage.removeItem('themeChoice');
        localStorage.setItem('themeChoice', JSON.stringify('light'));
        setTheme('light');
        break;
      case 'light':
        window.document.body.classList.remove('light');
        window.document.body.classList.add('dark');
        localStorage.removeItem('themeChoice');
        localStorage.setItem('themeChoice', JSON.stringify('dark'));
        setTheme('dark');
        break;

      default:
        break;
    }
  }

  return (
    <button
      className={styles.themeButton}
      onClick={toggleTheme}
    >
      <Image
        src={'/' + theme + '-mode.svg'}
        alt=""
        width={'16'}
        height={'16'}
        quality={100}
      ></Image>
      {props.children}
    </button>
  );
}
