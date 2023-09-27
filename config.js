export const locales=['en']

export const SEO = {
    title: 'Springy',
    description: 'CBT',
    suffix: ' | CBT',
    companyName: 'CBT Proxy',
    themeColor: '#190041',
}

export const getSEO = (title, description) => ({
    title: title ? title + SEO.suffix : SEO.title,
    description: description || SEO.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
openGraph: {
    title: (title || SEO.title) + SEO.suffix,
        description: description || SEO.description,
        type: 'website',
        siteName: (title || SEO.title) + SEO.suffix,
},
applicationName: SEO.companyName,
    creator: SEO.companyName,
    robots: 'index, follow',
    publisher: SEO.companyName,
    themeColor: SEO.themeColor,
})