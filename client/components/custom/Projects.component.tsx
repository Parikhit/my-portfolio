import { useState } from 'react';

import { Button } from '../ui/button';

import ProjectCards from './Cards.component';
import CardsPreview from './CardsPreview.component';

const Projects = () => {
    const [projectCards, setProjectCards] = useState(<CardsPreview />);

    const onPressHandler = () => setProjectCards(<ProjectCards />);

    return (
        <div id='projects' className='relative z-10 max-w-5xl mx-auto px-8 mb-44'>
            <div className='absolute -z-10 w-full top-80 right-8 flex justify-end items-start'>
                <div className='w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-b from-[#f539aa] to-[#fe6c4c] rounded-full blur-[80px] animate-fourth sm:blur-[200px]'></div>
            </div>

            <h1 className='text-rose-700 text-4xl text-center font-extrabold '>Projects</h1>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
            mt-8'
            >
                {projectCards}
            </div>
            <div className='w-full relative'>
                <Button
                    variant='ghost'
                    size='sm'
                    className='absolute hover:bg-transparent hover:scale-110 hover:text-blue-600 text-xl font-semibold text-blue-700 w-fit top-6 right-2'
                    onClick={onPressHandler}
                >
                    More...
                </Button>
            </div>
        </div>
    );
};

export default Projects;
