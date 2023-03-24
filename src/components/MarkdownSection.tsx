/** @format */
import styles from '@/styles/components/MarkdownSection.module.css';

interface IMarkdownSectionProps {
  className?: string
}

export default function MarkdownSection(props: React.PropsWithChildren<IMarkdownSectionProps>) {
  return <div className={[styles.markdownSection, props.className].join(' ')}>
    {props.children}
  </div>;
}
