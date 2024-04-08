'use client';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Socials from './Socials.component';

import { ArrowDownToLine, Contact } from 'lucide-react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section id='home' className='relative z-10 py-12 xl:py-24 h-[74vh] xl:pt-10'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='absolute w-1/2 sm:full flex justify-between -z-10'>
                        <div className='w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-gradient-to-b from-[#f539aa] to-[#fe6c4c] rounded-full blur-[80px] animate-third sm:blur-[160px]'></div>
                        <div className='w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full blur-[80px] animate-third sm:blur-[160px]'></div>
                    </div>

                    {/* Hero Texts */}
                    <div className='flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 xl:text-left'>
                        <div className='flex items-center gap-x-4 mb-4'>
                            <h2 className='text-2xl font-bold text-rose-700'>Hello World</h2>
                            <Image
                                src='/hand-wave.gif'
                                alt='hand-wave'
                                priority
                                width={40}
                                height={40}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                        <div>
                            <h1 className='h1 mb-4'>I&apos;m Parikhit Baruah,</h1>
                            <h1 className='h2 mb-10'>
                                I am a{' '}
                                <span className='text-blue-700'>
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
                                <ScrollLink
                                    to='contacts'
                                    spy={true}
                                    smooth={true}
                                    offset={-190}
                                    duration={500}
                                >
                                    <Button
                                        variant='default'
                                        className='gap-x-2 hover:scale-105 bg-blue-700 hover:bg-blue-600'
                                    >
                                        Contact me <Contact size={18} />
                                    </Button>
                                </ScrollLink>
                                <a href='demo-resume.pdf' target='_blank'>
                                    <Button variant='outline' className='gap-x-2 hover:scale-105'>
                                        Download Resume
                                        <ArrowDownToLine size={18} />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Socials */}
                    <div className='hidden xl:flex lg:flex'>
                        <Socials size={30} />
                    </div>
                </div>
                {/* Mobile Version */}
                <div className='w-auto flex items-center justify-center xl:hidden lg:hidden my-4'>
                    <Socials size={18} margin={2} />
                </div>

                <div className='hidden md:flex absolute left-2/4 xl:bottom-26 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-blue-700' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
