/** @format */
import PortfolioCard from "./container/PortfolioCard";
import Content from "@/lib/container/Content";
import textStyles from '@/lib/container/Text.module.css';
import homeStyles from './Home.module.css';

import redSolitudePic from './redsolitude.png';
import solitudePic from './solitude.png';
import solitudeVSCPic from './screenshot_red.png';
import StyledLink from '@/lib/interaction/links/StyledLink';


export default function Page() {
    return (
        <Content id="portfolioPage" className={[homeStyles.portfolioPage, 'applyHeaderOffset'].join(' ')}>
            <h1 className={[textStyles.center].join(' ')}>Portfolio 🪄</h1>
            <div className={[homeStyles.portfolioCardWrapper].join(' ')}>
                <h2 className={[homeStyles.leftHeading].join(' ')}>Webapps 🔗</h2>

                <PortfolioCard image={'https://kyleklus.de/projects/postFiles/ReceiptManagerBillEditor.png'} alt='Receipt Manager Promo Screenshot'>
                    <h4>Receipt Manager (<StyledLink href={'https://github.com/KyleKlus/receipt-manager'}>GitRepo</StyledLink>) </h4>
                    The <StyledLink href={'https://kyleklus.de/projects/posts/coding/website/Receipt-Manager'}>receipt manager</StyledLink> is a web app, which helps you calculate the amount of money a person gets from another person, when they and the other person have an occasion where both paid for some expenses and then need to split the bills again.
                </PortfolioCard>
                <h2 className={[homeStyles.leftHeading].join(' ')}>Themes 🎨</h2>
                <PortfolioCard image={solitudeVSCPic} alt='Solitude Promo Screenshot'>
                    <h4>&quot;Solitude&quot; Theme for Visual Studio Code (<StyledLink href={'https://github.com/KyleKlus/solitude-vs-code-color-theme'}>GitRepo</StyledLink>)</h4>
                    Solitude is a dark theme for Visual Studio Code that features 3 accent colors (red, green, blue) and 2 different brightness levels to choose from.
                </PortfolioCard>

                <PortfolioCard image={solitudePic} alt='Solitude Promo Screenshot'>
                    <h4>&quot;Solitude&quot; Theme for Obsidian (<StyledLink href={'https://github.com/KyleKlus/solitude-obsidian-theme'}>GitRepo</StyledLink>)</h4>
                    Solitude is a modern looking Obsidian theme, which is optimized for desktop, mobile and tablet. It is highly customizable via the <StyledLink href={'https://github.com/mgmeyers/obsidian-style-settings'}>Style Settings</StyledLink> Plugin.
                </PortfolioCard>

                <PortfolioCard image={redSolitudePic} alt='Solitude Promo Screenshot'>
                    <h4>&quot;Red Solitude&quot; Theme for Visual Studio Code (<StyledLink href={'https://marketplace.visualstudio.com/items?itemName=MajorEnkidu.red-solitude'}>VSC Marketplace</StyledLink>)</h4>
                    Red Solitude is a very dark theme with a green-blueish tint. It uses a <mark className='accent-marker'>red</mark> accent color and has a colorful syntax highlighting.
                </PortfolioCard>

            </div>
        </Content>
    );
}