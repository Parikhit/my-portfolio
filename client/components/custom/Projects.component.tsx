import { useState, useRef } from 'react';

import { Button } from '../ui/button';

import ProjectCards from './Cards.component';
import CardsPreview from './CardsPreview.component';

const Projects = () => {
    const [projectCards, setProjectCards] = useState(<CardsPreview />);
    const ref = useRef(null);

    const onPressHandler = () => setProjectCards(<ProjectCards />);

    return (
        <div id='projects' className='max-w-5xl mx-auto px-8  mb-20'>
            <h1 className='text-rose-700 text-4xl text-center font-semibold'>Projects</h1>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
            mt-8 hover:border-white'
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
