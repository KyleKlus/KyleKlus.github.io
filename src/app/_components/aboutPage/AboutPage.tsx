/** @format */
import Image from 'next/image';

import Content from "@/lib/container/Content";
import Text from '@/lib/container/Text';
import styles from './About.module.css';

import profilePic from './KK_Profile_Photo.jpg';

export default function AboutPage() {
    return (
        <Content id="aboutPage" className={[styles.aboutPage, 'crossed', 'applyBottomPadding'].join(' ')}>
            <div className={styles.aboutPageBG}>
                <div className={styles.aboutPageInfo}>
                    <div className={[styles.aboutPage_firstBreak].join(' ')}>
                        <Image
                            src={profilePic}
                            alt="KK Profile Image"
                            width={'150'}
                            height={'150'}
                            quality={100}
                            className={[styles.aboutPageProfilePic].join(' ')}
                        />
                        <h2 className={[styles.aboutPageProfileName].join(' ')} >Kyle Klus</h2>
                    </div>
                    <div className={[styles.aboutPage_secondBreak].join(' ')}>
                        <div className={[styles.aboutPage_thirdBreak].join(' ')}>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Web Development 🔗</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={84}></progress>
                            </div>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Embedded Systems Dev. 🤖</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={42}></progress>
                            </div>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>App Development 📱</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={32}></progress>
                            </div>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Programm Development 🧑🏻‍💻</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={64}></progress>
                            </div>
                        </div>
                        <div className={[styles.aboutPage_fourthBreak].join(' ')}>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Building Stuff 🛠️</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={75}></progress>
                            </div>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Woodworking 🪚</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={55}></progress>
                            </div><div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Plants 🌱</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={70}></progress>
                            </div>
                            <div className={[styles.aboutPageSkillWrapper].join(' ')}>
                                <p className={[styles.aboutPageProfileSkillText].join(' ')}>Perseverance 🚀</p>
                                <progress className={[styles.aboutPageProfileSkillBar].join(' ')} max={100} value={100}></progress>
                            </div>
                        </div>
                    </div>
                </div>
                <Text className={styles.aboutPageText}>
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