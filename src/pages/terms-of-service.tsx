/** @format */

import Head from 'next/head';
import dynamic from 'next/dynamic';
import Footer from '@/lib/layouts/footer/Footer';
import Header from '@/lib/layouts/header/Header';
import Content from '@/lib/container/Content';
import Text from '@/lib/container/Text';
import Main from '@/lib/container/Main';
import ScrollNavLink from '@/lib/interaction/links/ScrollNavLink';

import styles from '@/styles/pages/TermsOfService.module.css';
import headerStyles from '@/styles/lib/components/layouts/header/Header.module.css';

const ThemeButton = dynamic(() => import('@/lib/interaction/forms/buttons/ThemeButton'), {
  ssr: false,
});

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Kyle Klus | Terms of Service 📑</title>
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
          elementName="/#heroPage"
          displayText="Home"
        />
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="/#portfolioPage"
          displayText="Portfolio"
        />
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="/#aboutPage"
          displayText="About"
        />
        <ThemeButton />
      </Header>
      <Main>
        <div id={'top'}></div>
        <Content className={[styles.tosPage, 'applyHeaderOffset'].join(' ')}>
          <Text>
            <br />
            <br />
            <h1>Website Terms and Conditions of Use</h1>

            <h2>1. Terms</h2>

            <p>By accessing this Website, accessible from https://kyleklus.github.io/, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

            <h2>2. Use License</h2>

            <p>Permission is granted to temporarily download one copy of the materials on Kyle Klus&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Kyle Klus&apos;s Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
            </ul>

            <p>This will let Kyle Klus to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>

            <h2>3. Disclaimer</h2>

            <p>All the materials on Kyle Klus&apos;s Website are provided &quot;as is&quot;. Kyle Klus makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Kyle Klus does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

            <h2>4. Limitations</h2>

            <p>Kyle Klus or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Kyle Klus&apos;s Website, even if Kyle Klus or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

            <h2>5. Revisions and Errata</h2>

            <p>The materials appearing on Kyle Klus&apos;s Website may include technical, typographical, or photographic errors. Kyle Klus will not promise that any of the materials in this Website are accurate, complete, or current. Kyle Klus may change the materials contained on its Website at any time without notice. Kyle Klus does not make any commitment to update the materials.</p>

            <h2>6. Links</h2>

            <p>Kyle Klus has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Kyle Klus of the site. The use of any linked website is at the user&apos;s own risk.</p>

            <h2>7. Site Terms of Use Modifications</h2>

            <p>Kyle Klus may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

            <h2>8. Your Privacy</h2>

            <p>Please read our Privacy Policy.</p>

            <h2>9. Governing Law</h2>

            <p>Any claim related to Kyle Klus&apos;s Website shall be governed by the laws of de without regards to its conflict of law provisions.</p>
          </Text>
        </Content>
        <Footer />
      </Main>
    </>
  );
}
