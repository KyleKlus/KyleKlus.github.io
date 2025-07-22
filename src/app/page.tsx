/** @format */

import Content from "@/lib/container/Content";

import textStyles from '@/lib/container/Text.module.css';
import homeStyles from './Home.module.css';

import type { Metadata, Viewport } from 'next'

import redSolitudePic from '../../public/redsolitude.png';
import solitudePic from '../../public/solitude.png';
import solitudeVSCPic from '../../public/screenshot_red.png';
import PortfolioCard from "./components/container/PortfolioCard";
import Link from "next/link";
import Image from 'next/image';
import Text from '@/lib/container/Text';

export const metadata: Metadata = {
    title: "Kyle Klus | Website 🚀",
    description: "Website of Kyle Klus.",
    openGraph: {
        type: "website",
        url: "https://kyleklus.de/",
        title: "Kyle Klus | Website",
        description: "Website of Kyle Klus.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <>
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
            <Content id="portfolioPage" className={[homeStyles.portfolioPage, 'applyHeaderOffset'].join(' ')}>
                <h1 className={[textStyles.center].join(' ')}>Portfolio 🪄</h1>
                <div className={[homeStyles.portfolioCardWrapper].join(' ')}>
                    <h2 className={[homeStyles.leftHeading].join(' ')}>Webapps 🔗</h2>

                    <PortfolioCard image={'https://kyleklus.de/projects/postFiles/ReceiptManagerBillEditor.png'} alt='Receipt Manager Promo Screenshot'>
                        <h4>Receipt Manager (<Link href={'https://github.com/KyleKlus/receipt-manager'}>GitRepo</Link>) </h4>
                        The <Link href={'https://kyleklus.de/projects/posts/coding/website/Receipt-Manager'}>receipt manager</Link> is a web app, which helps you calculate the amount of money a person gets from another person, when they and the other person have an occasion where both paid for some expenses and then need to split the bills again.
                    </PortfolioCard>
                    <h2 className={[homeStyles.leftHeading].join(' ')}>Themes 🎨</h2>
                    <PortfolioCard image={solitudeVSCPic} alt='Solitude Promo Screenshot'>
                        <h4>&quot;Solitude&quot; Theme for Visual Studio Code (<Link href={'https://github.com/KyleKlus/solitude-vs-code-color-theme'}>GitRepo</Link>)</h4>
                        Solitude is a dark theme for Visual Studio Code that features 3 accent colors (red, green, blue) and 2 different brightness levels to choose from.
                    </PortfolioCard>

                    <PortfolioCard image={solitudePic} alt='Solitude Promo Screenshot'>
                        <h4>&quot;Solitude&quot; Theme for Obsidian (<Link href={'https://github.com/KyleKlus/solitude-obsidian-theme'}>GitRepo</Link>)</h4>
                        Solitude is a modern looking Obsidian theme, which is optimized for desktop, mobile and tablet. It is highly customizable via the <Link href={'https://github.com/mgmeyers/obsidian-style-settings'}>Style Settings</Link> Plugin.
                    </PortfolioCard>

                    <PortfolioCard image={redSolitudePic} alt='Solitude Promo Screenshot'>
                        <h4>&quot;Red Solitude&quot; Theme for Visual Studio Code (<Link href={'https://marketplace.visualstudio.com/items?itemName=MajorEnkidu.red-solitude'}>VSC Marketplace</Link>)</h4>
                        Red Solitude is a very dark theme with a green-blueish tint. It uses a <mark className='accent-marker'>red</mark> accent color and has a colorful syntax highlighting.
                    </PortfolioCard>

                </div>
            </Content>
            <Content id="aboutPage" className={[homeStyles.aboutPage, 'dotted'].join(' ')}>
                <div className={homeStyles.aboutPageBG}>
                    <div className={homeStyles.aboutPageInfo}>
                        <div className={[homeStyles.aboutPage_firstBreak].join(' ')}>
                            <Image
                                src={process.env.basePath + "/KK_Profile_Photo.jpg"}
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
        </>
    );
}