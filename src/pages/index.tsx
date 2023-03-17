/** @format */

import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Content from '@/components/Content';
import Text from '@/components/Text';

import Main from '@/components/Main';
import textStyles from '@/styles/Text.module.css'
import homeStyles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Kyle Klus | Website</title>
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
      <Header />
      <Main>
        <div id={'top'}></div>
        <Content id="heroPage" className={homeStyles.heroPage}>
          <div className={homeStyles.slideInWrapper}>
            <p className={[textStyles.xxLarge, textStyles.left, homeStyles.slideInRight].join(' ')}>Hi there👋, I am Kyle!</p>
            <br />
            <br />
            <p className={[textStyles.xLarge, textStyles.right, homeStyles.slideInLeft].join(' ')}>I am a computer science student,</p>
            <p className={[textStyles.large, textStyles.left, homeStyles.slideInRight].join(' ')}>a passionate cook 🍳,</p>
            <br />
            <br />
            <p className={[textStyles.xxLarge, textStyles.left, homeStyles.slideInRight].join(' ')}>a frontend developer🚀,</p>
            <br />
            <p className={[textStyles.xLarge, textStyles.center, homeStyles.slideInLeft].join(' ')}>a woodworking hobbyist</p>
            <br />
            <p className={[textStyles.large, textStyles.right, homeStyles.slideInLeft].join(' ')}>and overall a DIY lover ❤️.</p>
          </div>
        </Content>
        <Content id="portfolioPage">
          <Text>
            <br />
            <h1>Portfolio</h1>
            <br />
            <p>Coming soon!</p>
          </Text>
        </Content>
        <Content id="aboutPage">
          <Text>
            <br />
            <h1>About Me 🧑🏻‍💻</h1>
            <br />
            <br />
            <p>Hi there! I&apos;m Kyle Klus, a free time software developer and a student at the University of Hanover, where I&apos;m pursuing a degree in technical computer science.</p>
            <br />
            <p>I love coding in various languages such as React, C/C++, Java and Python. I also enjoy woodworking and DIY projects in my free time. When I&apos;m not coding, you can find me in my workshop, crafting woodworking and in general DIY projects with my own hands.</p>
            <br />
            <p>Currently, I work as a part-time frontend developer for the &quot;Finanz Informatik&quot;, where I create user-friendly WebParts for Microsoft SharePoint sites. And when I need a break from all that, I like to cook delicious meals for myself and my friends. Whether it&apos;s software development, woodworking or cooking, I always strive to do my best and have fun along the way. </p>
            <br />
            <p>Welcome to my website! 🎉</p>
            <br />
            <br />
            <br />
          </Text>
        </Content>
        <Footer />
      </Main>
    </>
  );
}
