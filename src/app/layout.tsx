import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "AI eBay Listing Generator | Create Listings from Photos in Seconds - FireKiwi",
        template: "%s | FireKiwi",
    },
    description:
        "Create professional eBay listings in seconds with AI. Upload a photo, get optimized titles, descriptions & pricing. Join 10,000+ sellers on the waitlist. Free to start.",
    keywords: [
        "AI eBay listing generator",
        "turn photo into eBay listing",
        "eBay listing tool",
        "AI listing creator",
        "eBay listing automation",
        "create eBay listing from photo",
        "eBay listing generator",
        "automated eBay listing",
    ],
    authors: [{ name: "FireKiwi" }],
    creator: "FireKiwi",
    publisher: "FireKiwi",
    metadataBase: new URL("https://www.firekiwi.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.firekiwi.com",
        siteName: "FireKiwi",
        title: "AI eBay Listing Generator | Create Listings from Photos in Seconds - FireKiwi",
        description:
            "Create professional eBay listings in seconds with AI. Upload a photo, get optimized titles, descriptions & pricing. Join 10,000+ sellers. Free to start.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "FireKiwi - AI eBay Listing Generator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI eBay Listing Generator | Create Listings from Photos in Seconds - FireKiwi",
        description:
            "Create professional eBay listings in seconds with AI. Join 10,000+ sellers on the waitlist. Free to start.",
        images: ["/images/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={`${inter.className} antialiased`}>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2650916309334823"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
                {children}
            </body>
        </html>
    );
}

