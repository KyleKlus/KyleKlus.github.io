/** @format */
import Image from 'next/image';

import Content from "@/lib/container/Content";
import Text from '@/lib/container/Text';
import homeStyles from '../../Home.module.css';

import profilePic from './KK_Profile_Photo.jpg';

export default function AboutPage() {
    return (
        <Content id="aboutPage" className={[homeStyles.aboutPage, 'dotted', 'applyBottomPadding'].join(' ')}>
            <div className={homeStyles.aboutPageBG}>
                <div className={homeStyles.aboutPageInfo}>
                    <div className={[homeStyles.aboutPage_firstBreak].join(' ')}>
                        <Image
                            src={profilePic}
                            alt="KK Profile Image"
                            width={'150'}
                            height={'150'}
                            quality={100}
                            className={[homeStyles.aboutPageProfilePic].join(' ')}
                        />
                        <h2 className={[homeStyles.aboutPageProfileName].join(' ')} >Kyle Klus</h2>
                    </div>
                    <div className={[homeStyles.aboutPage_secondBreak].join(' ')}>
                        <div className={[homeStyles.aboutPage_thirdBreak].join(' ')}>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Web Development 🔗</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={84}></progress>
                            </div>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Embedded Systems Dev. 🤖</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={42}></progress>
                            </div>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>App Development 📱</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={32}></progress>
                            </div>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Programm Development 🧑🏻‍💻</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={64}></progress>
                            </div>
                        </div>
                        <div className={[homeStyles.aboutPage_fourthBreak].join(' ')}>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Building Stuff 🛠️</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={75}></progress>
                            </div>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Woodworking 🪚</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={55}></progress>
                            </div><div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Plants 🌱</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={70}></progress>
                            </div>
                            <div className={[homeStyles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[homeStyles.aboutPageProfileSkillText].join(' ')}>Perseverance 🚀</p>
                                <progress className={[homeStyles.aboutPageProfileSkillBar].join(' ')} max={100} value={100}></progress>
                            </div>
                        </div>
                    </div>
                </div>
                <Text className={homeStyles.aboutPageText}>
                    <br />
                    <h2 >About Me 🧑🏻‍💻</h2>
                    <br />
                    <br />
                    <p>Hi there! I&apos;m Kyle Klus, a free time software developer and a student at the Leibniz University of Hanover, where I&apos;m pursuing a degree in technical computer science.</p>
                    <br />
                    <p>I love coding in various languages such as React, C/C++, Java and Python. I also enjoy woodworking and DIY projects in my free time. When I&apos;m not coding, you can find me in my workshop, crafting stuff, woodworking or in general doing DIY projects.</p>
                    <br />
                    <p>Currently, I work as a part-time frontend developer for the &quot;Finanz Informatik&quot;, where I create user-friendly WebParts for Microsoft SharePoint sites. And when I need a break from all that, I like to cook delicious meals for myself and my friends. </p>
                    <br />
                    <p>
                        Whether it&apos;s software development, woodworking or cooking, I always strive to do my best and have fun along the way. </p>
                    <br />
                    <br />
                    <p>Welcome to my website! 🎉</p>
                    <br />
                </Text>
            </div>
        </Content>
    );
}