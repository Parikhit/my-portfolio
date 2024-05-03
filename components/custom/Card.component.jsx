import Link from 'next/link';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { FaGithub, FaLink } from 'react-icons/fa6';

const ProjectCard = ({ title, preview, description, techStack, github, link }) => {
    return (
        <Card
            key={title}
            className='text-lg hover:border-blue-700 hover:scale-105 transition-transform shadow-xl'
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <Image
                    className='hover:scale-125 transition-transform'
                    src={preview}
                    width={500}
                    height={500}
                    alt='preview'
                    priority
                />
            </CardHeader>

            <CardContent>
                <CardDescription className='text-md'>{description}</CardDescription>
            </CardContent>
            <div className='flex gap-2 ml-6 items-center p-3'>
                {/* <div className='text-blue-700 text-base font-semibold px-2'>Tech Used:</div> */}
                {techStack.map((tech, id) => (
                    <p key={id} className='hover:scale-125'>
                        {tech}
                    </p>
                ))}
            </div>
            <CardFooter>
                <div className='w-full flex items-center justify-between mx-3'>
                    <Link
                        className='flex gap-2 items-center font-medium hover:scale-125'
                        href={github}
                        target='_blank'
                    >
                        Github
                        <FaGithub />
                    </Link>

                    <Link
                        className='flex gap-2 items-center font-medium hover:scale-125'
                        href={link}
                        target='_blank'
                    >
                        Live
                        <FaLink />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
