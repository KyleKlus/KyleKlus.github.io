/** @format */

import styles from '@/styles/header/ScrollNavLink.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeaderNavigation from './HeaderNavigation';

interface INavLinkProps {
  className?: string;
  elementName: string;
  displayText: string;
}

export default function ScrollNavLink(props: React.PropsWithChildren<INavLinkProps>) {
  const [isInView, setIsInView] = useState(false)
  const styleClass = props.className ? ' ' + props.className : ''
  const classes =
    isInView ? ' ' + styles.isCurrentWindow + styleClass : styleClass;

  useEffect(() => {
    function determineCurrentPage() {
      const element = document.getElementById(props.elementName)
      if (element) {
        const top = element.offsetTop
        const bottom = element.offsetHeight + top
        const currentPos = document.documentElement.scrollTop

        if (top - 200 <= currentPos && bottom - 200 >= currentPos) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      }
    }

    determineCurrentPage()

    window.addEventListener('scroll', determineCurrentPage);
    return () => {
      window.removeEventListener('scroll', determineCurrentPage);
    };
  }, []);

  return (
    <button
      className={styles.navLink + classes}
      onClick={(e) => {
        const element = document.getElementById(props.elementName)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
          setIsInView(true)
        }
        e.preventDefault()
      }}
    >
      {props.displayText}
    </button>
  );
}
