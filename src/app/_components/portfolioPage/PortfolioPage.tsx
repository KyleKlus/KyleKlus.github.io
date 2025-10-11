'use client';

import { useState } from 'react';
import PortfolioCard from "./PortfolioCard";
import Content from "@/lib/container/Content";
import textStyles from '@/lib/container/Text.module.css';
import styles from './Portfolio.module.css';

import solitudePic from './solitude.png';
import solitudeVSCPic from './screenshot_red.png';
import StyledLink from '@/lib/interaction/links/StyledLink';
import Nav from "react-bootstrap/Nav";
import { Carousel, CarouselItem, NavItem, NavLink } from "react-bootstrap";
import { PortfolioTabs } from './PortfolioTabs';
import { useTheme } from 'next-themes';

export default function PortfolioPage() {
    const [activeKey, setActiveKey] = useState(PortfolioTabs.Webapps);
    const [firstIndex, setFirstIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);

    const { theme } = useTheme();

    return (
        <Content id="portfolioPage" className={[styles.portfolioPage, 'applyHeaderOffset', 'applyBottomPadding'].join(' ')}>
            <h1 className={[textStyles.center].join(' ')}>Portfolio 🪄</h1>
            <div className={[styles.portfolioCardWrapper].join(' ')}>
                <Nav
                    variant="tabs"
                    className={styles.tabContainer}
                    activeKey={activeKey}
                    onSelect={(selectedKey) => setActiveKey(selectedKey as PortfolioTabs)}
                >
                    {Object.values(PortfolioTabs).map((tab) => (
                        <NavItem key={tab} className={styles.tabItem}>
                            <NavLink key={tab} className={styles.tabLink} eventKey={tab}>
                                <span>{tab}</span>
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
                <Carousel
                    hidden={activeKey !== PortfolioTabs.Webapps}
                    className={[styles.carousel].join(' ')}
                    activeIndex={firstIndex}
                    onSelect={(index) => setFirstIndex(index)}
                    interval={null}
                    slide={false}
                    indicators={false}
                    variant={theme === 'dark' ? 'light' : 'dark'}
                >
                    <CarouselItem className={[styles.carouselItem].join(' ')}>
                        <PortfolioCard image={''} alt=''>
                            <h4>Receipt Manager (<StyledLink href={'https://github.com/KyleKlus/receipt-manager'}>GitRepo</StyledLink>) </h4>
                            The <StyledLink href={'https://kyleklus.de/projects/posts/coding/website/Receipt-Manager'}>receipt manager</StyledLink> is a web app, which helps you calculate the amount of money a person gets from another person, when they and the other person have an occasion where both paid for some expenses and then need to split the bills again.
                        </PortfolioCard>
                    </CarouselItem>
                    <CarouselItem className={[styles.carouselItem].join(' ')}>
                        <PortfolioCard image={''} alt=''>
                            <h4>Text Tools (<StyledLink href={'https://github.com/KyleKlus/text-tools'}>GitRepo</StyledLink>) </h4>
                            The <StyledLink href={'https://kyleklus.de/text-tools'}>text tools</StyledLink> are a set of free online tools, which help you to work with texts.
                            <br />
                            It is part of a series of web apps, which are all centered around being free to use, without ads and without any tracking. The idea came to me, because there are so many free to use js libraries but they dont have a ui, so that people can use them without coding knowledge.
                        </PortfolioCard>
                    </CarouselItem>
                    <CarouselItem className={[styles.carouselItem].join(' ')}>
                        <PortfolioCard image={''} alt=''>
                            <h4>QR Code Generator (<StyledLink href={'https://github.com/KyleKlus/qr-code-generator'}>GitRepo</StyledLink>) </h4>
                            The <StyledLink href={'https://kyleklus.de/qr-code-generator'}>QR code generator</StyledLink> is a web app, which helps you to generate QR codes and Style them however you want.
                            <br />
                            It is part of a series of web apps, which are all centered around being free to use, without ads and without any tracking. The idea came to me, because there are so many free to use js libraries but they dont have a ui, so that people can use them without coding knowledge.
                        </PortfolioCard>
                    </CarouselItem>
                </Carousel>
                <Carousel
                    hidden={activeKey !== PortfolioTabs.Themes}
                    className={[styles.carousel].join(' ')}
                    activeIndex={secondIndex}
                    onSelect={(index) => setSecondIndex(index)}
                    interval={null}
                    slide={false}
                    indicators={false}
                    variant={theme === 'dark' ? 'light' : 'dark'}
                >
                    <CarouselItem className={[styles.carouselItem].join(' ')}>
                        <PortfolioCard image={solitudeVSCPic} alt='Solitude Promo Screenshot'>
                            <h4>&quot;Solitude&quot; Theme for Visual Studio Code (<StyledLink href={'https://github.com/KyleKlus/solitude-vs-code-color-theme'}>GitRepo</StyledLink>)</h4>
                            Solitude is a dark theme for Visual Studio Code that features 3 accent colors (red, green, blue) and 2 different brightness levels to choose from.
                        </PortfolioCard>
                    </CarouselItem>
                    <CarouselItem className={[styles.carouselItem].join(' ')}>
                        <PortfolioCard image={solitudePic} alt='Solitude Promo Screenshot'>
                            <h4>&quot;Solitude&quot; Theme for Obsidian (<StyledLink href={'https://github.com/KyleKlus/solitude-obsidian-theme'}>GitRepo</StyledLink>)</h4>
                            Solitude is a modern looking Obsidian theme, which is optimized for desktop, mobile and tablet. It is highly customizable via the <StyledLink href={'https://github.com/mgmeyers/obsidian-style-settings'}>Style Settings</StyledLink> Plugin.
                        </PortfolioCard>
                    </CarouselItem>
                </Carousel>
            </div>
        </Content>
    );
}