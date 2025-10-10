/** @format */
import 'bootstrap/dist/css/bootstrap.min.css';
import './default-look.css';
import './globals.css';
import styles from './Layout.module.css';
import headerStyles from '@/lib/layouts/header/Header.module.css'

import { Fira_Code } from "next/font/google";

import Header from '@/lib/layouts/header/Header';
import Main from '@/lib/container/Main';
import Footer from '@/lib/layouts/footer/Footer';
import ScrollNavLink from '@/lib/interaction/links/ScrollNavLink';
import ThemeButton from '@/lib/interaction/forms/buttons/ThemeButton';

import { ThemeProvider } from '@/lib/provider/theme-provider';

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

interface ILayoutProps {
    title?: string;
    className?: string;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
    return (
        <html style={{ fontFamily: firaCode.style.fontFamily }}>
            <body>
                <ThemeProvider>
                    <Header >
                        <ScrollNavLink
                            className={headerStyles.headerNavLink}
                            elementName="https://kyleklus.de/#heroPage"
                            displayText="Home"
                        />
                        <ScrollNavLink
                            className={headerStyles.headerNavLink}
                            elementName="https://kyleklus.de/#portfolioPage"
                            displayText="Portfolio"
                        />
                        <ScrollNavLink
                            className={headerStyles.headerNavLink}
                            elementName="https://kyleklus.de/#aboutPage"
                            displayText="About"
                        />
                        <ThemeButton />
                    </Header >
                    <Main>
                        <div id={'top'}></div>
                        {props.children}
                        <Footer />
                    </Main>
                </ThemeProvider>
            </body>
        </html>
    );
}

function isCurrentWindow(currentPath: string, buttonPath: string): boolean {
    const currentPathName: string = currentPath.split('/').reverse()[0].replace('#', '');
    const buttonPathName: string = buttonPath.split('/').reverse()[0].replace('#', '');

    return (buttonPathName.length === 0 && currentPathName.length === 0) ||
        (buttonPathName.length !== 0 && currentPathName.length !== 0 && buttonPathName.indexOf(currentPathName) !== -1);
}

function applyCurrentWindowStyle(currentPath: string, buttonPath: string): string {
    return isCurrentWindow(currentPath, buttonPath)
        ? styles.isCurrentWindow
        : '';
}
