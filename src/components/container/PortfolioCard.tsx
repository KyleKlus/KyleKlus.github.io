/** @format */
import styles from '@/styles/components/container/PortfolioCard.module.css';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Card from '@/components/container/Card';
import Text from '@/components/container/Text';
import Image from 'next/image';

interface IPortfolioCardProps {
  className?: string;
  image: StaticImageData | string;
  alt: string;
}

export default function PortfolioCard(props: React.PropsWithChildren<IPortfolioCardProps>) {
  return (
    <div className={[styles.portfolioCard].join(' ')}>
      <Image
        className={[styles.portfolioCardImg].join(' ')}
        src={props.image} alt={props.alt}
        priority={true}
        loading={'eager'}
        quality={100}
      />
      <hr />
      <Text className={[styles.portfolioCardText].join(' ')}>
        {props.children}
      </Text>
    </div>
  );
}
