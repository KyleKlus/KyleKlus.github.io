/** @format */
import styles from './PortfolioCard.module.css';
import { StaticImageData } from 'next/image';
import Text from '@/lib/container/Text';
import Image from 'next/image';

interface IPortfolioCardProps {
  className?: string;
  image?: StaticImageData | string;
  alt: string;
}

export default function PortfolioCard(props: React.PropsWithChildren<IPortfolioCardProps>) {
  return (
    <div className={[styles.portfolioCard].join(' ')}>
      {props.image && props.image !== '' &&
        <div className={[styles.portfolioCardImg].join(' ')}>
          <Image
            src={props.image} alt={props.alt}
            priority={true}
            loading={'eager'}
            quality={100}
            fill
          />
        </div>
      }
      {props.image && props.image !== '' && <hr />}
      <Text className={[styles.portfolioCardText].join(' ')}>
        {props.children}
      </Text>
    </div>
  );
}
