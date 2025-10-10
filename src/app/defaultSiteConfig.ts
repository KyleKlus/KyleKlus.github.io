const basePath: string = '';
const url: string = 'https://kyleklus.de';
const author: string = 'Kyle Klus';
const metadataEn = {
    title: "Kyle Klus | Website 🚀",
    description: "Website of Kyle Klus.",
    openGraph: {
        type: "website",
        url: url,
        title: "Kyle Klus | Website",
        description: "Website of Kyle Klus.",
    },
}

export const defaultSiteConfig = {
    basePath,
    url,
    author,
    metadata: {
        en: metadataEn,
        de: {
            ...metadataEn,
            description: "Website von Kyle Klus.",
            openGraph: {
                ...metadataEn.openGraph,
                description: "Website von Kyle Klus.",
            },
        }
    }
};