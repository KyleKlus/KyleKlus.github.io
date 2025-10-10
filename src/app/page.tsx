/** @format */
import type { Metadata, Viewport } from 'next'
import { defaultSiteConfig } from "./defaultSiteConfig";
import HeroPage from './_components/HeroPage';
import PortfolioPage from './_components/PortfolioPage';
import AboutPage from './_components/AboutPage';

export const metadata: Metadata = { ...defaultSiteConfig.metadata.en };

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