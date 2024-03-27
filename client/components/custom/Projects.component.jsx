import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { projectsData } from '@/lib/data';
import { title } from 'process';

const Projects = () => {
    return (
        <div id='projects' className='max-w-5xl mx-auto px-8'>
            <h1 className='text-4xl text-center font-semibold'>Projects</h1>
            <div
                className='grid grid-cols-4 gap-4
            mt-8 hover:border-white'
            >
                {projectsData.map((project) => (
                    <Card key={title}>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
