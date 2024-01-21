/** @format */
import styles from '@/styles/components/markdown/MarkdownSection.module.css';
import Image from 'next/image';

interface IMarkdownImageProps {
  className?: string;
  title: string;
  alt: string;
  src: string;
}

export default function MarkdownImage(props: React.PropsWithChildren<IMarkdownImageProps>) {
  return <div className={[styles.markdownImage, props.className].join(' ')}>
    <img src={props.src} alt={props.alt} title={props.title}/>
  </div>;
}
