import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";


import 'react-toastify/dist/ReactToastify.css';
import PageLayout from "@/components/commons/PageLayout";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Luxochain",
    description: "INNOVATION MEETS TRADITION",
};

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
