import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';

import Header from '@/components/custom/Header.component';
import Footer from '@/components/custom/Footer.component';
import ThemeProvider from '@/components/custom/ThemeProvider.component';

const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
    title: "Parikhit's Portfolio",
    description: 'Portfolio website of Parikhit Baruah',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={titilliumWeb.className}>
                <ThemeProvider attribute='class' defaultTheme='light'>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
