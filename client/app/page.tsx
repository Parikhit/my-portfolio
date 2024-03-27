'use client';

import { NextUIProvider } from '@nextui-org/react';

import Hero from '@/components/custom/Hero.component';
import Projects from '@/components/custom/Projects.component';
import Contact from '@/components/custom/Contact.component';
import Experience from '@/components/custom/Experience.component';
import Skills from '@/components/custom/Skills.component';

export default function Home() {
    return (
        <main>
            <NextUIProvider>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </NextUIProvider>
        </main>
    );
}
