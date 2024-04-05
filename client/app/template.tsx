'use client';

import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

import useScrollProgress from '@/hooks/useScrollProgress.hook';

type TemplateProps = {
    children: ReactNode;
};

const variants: Variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Template = ({ children }: TemplateProps) => {
    const completion = useScrollProgress();

    return (
        <>
            <motion.main
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
            >
                {children}
            </motion.main>

            {/*Completion Bar */}

            <span
                style={{ transform: `translateY(${completion - 100}%)` }}
                className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
            ></span>
        </>
    );
};

export default Template;
