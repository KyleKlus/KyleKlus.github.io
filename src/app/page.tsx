/** @format */
import type { Metadata, Viewport } from 'next'
import { siteConfig } from "./siteConfig";
import HeroPage from './_components/heroPage/HeroPage';
import PortfolioPage from './_components/portfolioPage/PortfolioPage';
import AboutPage from './_components/aboutPage/AboutPage';

export const metadata: Metadata = { ...siteConfig.metadata.en };

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <>
            <HeroPage />
            <PortfolioPage />
            <AboutPage />
        </>
    );
}