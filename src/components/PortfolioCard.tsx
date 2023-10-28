/** @format */
import styles from '@/styles/components/PortfolioCard.module.css';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Card from './Card';
import Text from './Text';
import Image from 'next/image';

interface IPortfolioCardProps {
  className?: string;
  image: StaticImageData;
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
