import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";


import 'react-toastify/dist/ReactToastify.css';
import PageLayout from "@/components/commons/PageLayout";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Luxochain",
    description: "INNOVATION MEETS TRADITION",
    keywords: ["luxochain", "luxo", "luxo chain", "luxo blockchain", "luxo chain blockchain", "luxo chain crypto", "luxo chain cryptocurrency", "luxo chain token", "luxo chain coin", "luxo chain nft", "luxo chain non fungible token", "luxo chain defi", "luxo chain decentralized finance", "luxo chain smart contract", "luxo chain blockchain technology", "luxo chain blockchain innovation", "luxo chain blockchain technology innovation", "digital passport ", "digital passport blockchain", "digital passport blockchain technology", "digital twin", "digital twin blockchain", "digital twin blockchain technology", "digital twin blockchain", "loyalty program", "loyalty program blockchain", "loyalty program blockchain technology", "loyalty program blockchain technology innovation", "loyalty program blockchain"],
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`luxo ${inter.className} !overflow-x-hidden`}>
        <Providers>
            <PageLayout>
                {children}
            </PageLayout>
        </Providers>
        </body>
        </html>
    );
}
