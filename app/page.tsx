'use client';

import { NextUIProvider } from '@nextui-org/react';

import Hero from '@/components/custom/Hero.component';

export default function Home() {
    return (
        <main>
            <NextUIProvider>
                <Hero />
            </NextUIProvider>
        </main>
    );
}
