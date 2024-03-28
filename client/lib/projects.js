import { FaReact } from 'react-icons/fa';
import { SiRedux, SiStyledcomponents, SiFirebase, SiNetlify } from 'react-icons/si';

export const projectsData = [
    {
        title: 'Stripe',
        preview: '/project-images/github-finder-front.png',
        description: 'A technology company that builds economic infrastructure for the internet.',
        techStack: [<FaReact size={25} style={{ color: 'blue' }} />],
        github: '',
        link: 'https://stripe.com',
    },
    {
        title: 'Royal Closet',
        preview: '/project-images/royal-closet-front.png',
        description:
            'Royal-Closet is a dynamic e-commerce website with a focus on user experience and functionality. Ensured a seamless online shopping experience through efficient state management using React and Redux-Toolkit.',
        techStack: [
            <FaReact size={25} style={{ color: 'blue' }} />,
            <SiRedux size={25} style={{ color: 'purple' }} />,
            <SiStyledcomponents size={35} style={{ color: 'e0ac69' }} />,
            <SiFirebase size={25} style={{ color: 'orange' }} />,
            <SiNetlify size={25} style={{ color: '#008080' }} />,
        ],
        github: 'https://github.com/Parikhit/royal-closet',
        link: 'https://royal-closet.netlify.app/',
    },
    {
        title: 'Health and Fitness App',
        preview: '/project-images/health-fitness-app-front.png',
        description:
            'Health and Fitness is a react application that enables one to choose and learn from thousands of exercises that is categorized according to various muscle groups. It also has practical examples for every exercise guided by similar exercises and related youtube videos. It makes use of Rapid Api to fetch data',
        techStack: [
            <FaReact size={25} style={{ color: 'blue' }} />,
            <SiNetlify size={25} style={{ color: '#008080' }} />,
        ],
        github: 'https://github.com/Parikhit/health-fitness-app',
        link: 'https://health-fitness-app.netlify.app/',
    },
    {
        title: 'Meta',
        preview: '/project-images/github-finder-front.png',
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        techStack: [<FaReact size={25} style={{ color: 'blue' }} />],
        github: '',
        link: 'https://meta.com',
    },
    {
        title: 'Amazon',
        preview: '/project-images/github-finder-front.png',
        description:
            'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
        techStack: [<FaReact size={25} style={{ color: 'blue' }} />],
        github: '',
        link: 'https://amazon.com',
    },
    {
        title: 'Github Profile Finder',
        preview: '/project-images/github-finder-front.png',
        description:
            "A React project that searches for GitHub users by their username and displays the user profile information. Github's own access tokens are used for fetching data.",
        techStack: [<FaReact size={25} style={{ color: 'blue' }} />],
        github: 'https://github.com/Parikhit/github-profile-finder',
        link: 'https://github-profile-search-v2.netlify.app/',
    },
];
