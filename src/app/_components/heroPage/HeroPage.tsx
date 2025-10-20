/** @format */
import Content from "@/lib/container/Content";
import textStyles from '@/lib/container/Text.module.css';
import styles from './Hero.module.css';

export default function HeroPage() {
    return (
        <Content id="heroPage" className={[styles.heroPage, 'crossed'].join(' ')}>
            <div className={styles.jiggleWrapper}>
                <p className={[styles.xxLarge, textStyles.left].join(' ')} content={'Hi there👋, I am Kyle!'}>Hi there👋, I am Kyle!</p>
                <p className={[styles.xLarge, textStyles.right].join(' ')} content={'I am a computer science student,'}>I am a computer science student,</p>
                <p className={[styles.large, textStyles.left].join(' ')} content={'a passionate cook 🍳,'}>a passionate cook 🍳,</p>
                <p className={[styles.xxLarge, textStyles.left].join(' ')} content={'a software developer🚀,'}>a software developer🚀,</p>
                <p className={[styles.xLarge, textStyles.center].join(' ')} content={'a woodworking hobbyist'}>a woodworking hobbyist</p>
                <p className={[styles.large, textStyles.right].join(' ')} content={'and overall a DIY lover ❤️.'}>and overall a DIY lover ❤️.</p>
            </div>
        </Content>
    );
}