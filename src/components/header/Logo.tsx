/** @format */

import styles from '@/styles/header/Logo.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SideNavigationButton from '../buttons/SideNavigationButton';
import SideNavigation from './SideNavigation';

export default function Logo() {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push('/');
      }}
      className={styles.logoWrapper}
    >
      <Image
        src="/KK_Logo.svg"
        alt="KK Logo"
        width={'48'}
        height={'48'}
        quality={100}
      ></Image>
      <p>Kyle Klus</p>
    </div>
  );
}
