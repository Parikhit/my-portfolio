import { useState } from 'react';

import { Button } from '../ui/button';

import ProjectCards from './Cards.component';
import CardsPreview from './CardsPreview.component';

const Projects = () => {
    const [projectCards, setProjectCards] = useState(<CardsPreview />);

    const onPressHandler = () => setProjectCards(<ProjectCards />);

    return (
        <div id='projects' className='relative z-10 max-w-5xl mx-auto px-8 mb-44'>
            {/* <div className='w-full h-full absolute top-80 right-8 flex justify-start -z-10'>
                <div className='w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full blur-[80px] animate-sixth sm:blur-[140px]'></div>
            </div> */}

            <h1 className='text-rose-700 text-4xl text-center font-semibold'>Projects</h1>
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
