import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/custom/Header.component';
import Footer from '@/components/custom/Footer.component';
import ThemeProvider from '@/components/custom/ThemeProvider.component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Portfolio',
    description: 'Portfolio website of Parikhit Baruah',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme='light'>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
