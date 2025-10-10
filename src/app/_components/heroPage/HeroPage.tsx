/** @format */
import Content from "@/lib/container/Content";
import textStyles from '@/lib/container/Text.module.css';
import homeStyles from '../../Home.module.css';

export default function HeroPage() {
    return (
        <Content id="heroPage" className={[homeStyles.heroPage, 'dotted'].join(' ')}>
            <div className={homeStyles.jiggleWrapper}>
                <p className={[homeStyles.xxLarge, textStyles.left].join(' ')} content={'Hi there👋, I am Kyle!'}>Hi there👋, I am Kyle!</p>
                <br />
                <br />
                <p className={[homeStyles.xLarge, textStyles.right].join(' ')} content={'I am a computer science student,'}>I am a computer science student,</p>
                <p className={[homeStyles.large, textStyles.left].join(' ')} content={'a passionate cook 🍳,'}>a passionate cook 🍳,</p>
                <br />
                <br />
                <p className={[homeStyles.xxLarge, textStyles.left].join(' ')} content={'a software developer🚀,'}>a software developer🚀,</p>
                <br />
                <p className={[homeStyles.xLarge, textStyles.center].join(' ')} content={'a woodworking hobbyist'}>a woodworking hobbyist</p>
                <br />
                <p className={[homeStyles.large, textStyles.right].join(' ')} content={'and overall a DIY lover ❤️.'}>and overall a DIY lover ❤️.</p>
            </div>
        </Content>
    );
}