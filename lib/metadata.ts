import { Metadata } from "next";

export const openGraphBase: NonNullable<Metadata['openGraph']> = {
    siteName: "SODIMAC Artículos",
    "type": "website",
    "locale": "es_CO",
    url: "https://sodimac-tau.vercel.app",
    images: [
        {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "SODIMAC Artículos"
        }
    ]
    
}