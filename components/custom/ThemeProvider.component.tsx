'use client';

import { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProps = {
    children: ReactNode;
    attribute: string;
    defaultTheme: 'dark' | 'light';
};

const ThemeProvider = ({ children, ...props }: ThemeProps) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
