/** @format */
import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Content from '@/components/container/Content';
import Text from '@/components/container/Text';
import Image from 'next/image';

import Main from '@/components/container/Main';

import textStyles from '@/styles/components/container/Text.module.css';
import homeStyles from '@/styles/pages/Home.module.css';
import headerStyles from '@/styles/components/header/Header.module.css';

import ScrollNavLink from '@/components/links/ScrollNavLink';
import dynamic from 'next/dynamic';

import redSolitudePic from '../../public/redsolitude.png';
import solitudePic from '../../public/solitude.png';
import solitudeVSCPic from '../../public/screenshot_red.png';
import receiptManagerPic from 'https://kyleklus.github.io/projectPostFiles/ReceiptManagerBillEditor.png';


import Link from 'next/link';
import PortfolioCard from '@/components/container/PortfolioCard';
import Logo from '@/components/header/Logo';

const ThemeButton = dynamic(() => import('@/components/buttons/ThemeButton'), {
  ssr: false,
});

export default function Home() {

  return (
    <>
      <Head>
        <title>Kyle Klus | Website 🚀</title>
        <meta
          name="description"
          content="Website of Kyle Klus."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="manifest" href="/manifest.webmanifest"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Header>
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="heroPage"
          displayText="Home"
        />
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="portfolioPage"
          displayText="Portfolio"
        />
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="aboutPage"
          displayText="About"
        />
        <ThemeButton />
      </Header>
      <Main>
        <div id={'top'}></div>
        <Content id="heroPage" className={[homeStyles.heroPage, 'dotted'].join(' ')}>
          <div className={homeStyles.slideInWrapper}>
            <p className={[homeStyles.xxLarge, textStyles.left, homeStyles.slideInRight].join(' ')}>Hi there👋, I am Kyle!</p>
            <br />
            <br />
            <p className={[homeStyles.xLarge, textStyles.right, homeStyles.slideInLeft].join(' ')}>I am a computer science student,</p>
            <p className={[homeStyles.large, textStyles.left, homeStyles.slideInRight].join(' ')}>a passionate cook 🍳,</p>
            <br />
            <br />
            <p className={[homeStyles.xxLarge, textStyles.left, homeStyles.slideInRight].join(' ')}>a software developer🚀,</p>
            <br />
            <p className={[homeStyles.xLarge, textStyles.center, homeStyles.slideInLeftToCenter].join(' ')}>a woodworking hobbyist</p>
            <br />
            <p className={[homeStyles.large, textStyles.right, homeStyles.slideInLeft].join(' ')}>and overall a DIY lover ❤️.</p>
          </div>
        </Content>
        <Content id="portfolioPage" className={[homeStyles.portfolioPage, 'applyHeaderOffset'].join(' ')}>
          <h1 className={[textStyles.center].join(' ')}>Portfolio 🪄</h1>
          <div className={[homeStyles.portfolioCardWrapper].join(' ')}>
            <h2 className={[homeStyles.leftHeading].join(' ')}>Webapps 🔗</h2>

            <PortfolioCard image={receiptManagerPic} alt='Receipt Manager Promo Screenshot'>
              <h4>Receipt Manager (<Link href={'https://github.com/KyleKlus/receipt-manager'}>GitRepo</Link>) </h4>
              The <Link href={'/projectPosts/coding/website/Receipt-Manager'}>receipt manager</Link> is a web app, which helps you calculate the amount of money a person gets from another person, when they and the other person have an occasion where both paid for some expenses and then need to split the bills again.
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
        <Footer />
      </Main>
    </>
  );
}
