import ProjectCard from './Card.component';

import { projectsData } from '@/lib/projects';

const ProjectCards = () => (
    <>
        {projectsData.map(({ title, preview, description, techStack, github, link }) => (
            <ProjectCard
                key={title}
                title={title}
                preview={preview}
                description={description}
                techStack={techStack}
                github={github}
                link={link}
            />
        ))}
    </>
);

export default ProjectCards;
