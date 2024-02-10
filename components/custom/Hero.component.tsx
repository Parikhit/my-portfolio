'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Socials from './Socials.component';

import { ArrowDownToLine, Contact } from 'lucide-react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* Hero Texts */}

                    <div className='flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 xl:text-left'>
                        <div className='flex items-center gap-x-4 mb-4'>
                            <h2 className='text-2xl font-bold text-primary'>Hello World</h2>
                            <Image
                                src='/hand-wave.gif'
                                alt='hand-wave'
                                priority
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <h1 className='h1 mb-4'>I&apos;m Parikhit Baruah,</h1>
                            <h1 className='h2 mb-10'>
                                I am a{' '}
                                <span className='text-primary'>
                                    <Typewriter
                                        words={[
                                            ' MERN Developer',
                                            ' NEXT.js Developer',
                                            ' React Native Developer',
                                            ' Freelancer',
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>

                            {/* Buttons */}

                            <div className='flex flex-col xl:flex-row md:flex-row gap-x-4 gap-y-4 mx-auto'>
                                <Link href='/contact'>
                                    <Button className='gap-x-2 hover:animate-bounce'>
                                        Contact me <Contact size={18} />
                                    </Button>
                                </Link>
                                <Link href='/contact'>
                                    <Button
                                        variant='secondary'
                                        className='gap-x-2 hover:animate-bounce'
                                    >
                                        Download Resume
                                        <ArrowDownToLine size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Socials */}

                    <div className='hidden xl:flex lg:flex'>
                        <Socials />
                    </div>
                </div>
                {/* Mobile Version */}
                <div className='flex items-center justify-center xl:hidden lg:hidden my-4'>
                    <Socials />
                </div>

                <div className='hidden md:flex absolute left-2/4 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
