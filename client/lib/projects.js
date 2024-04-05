import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiRedux, SiStyledcomponents, SiFirebase, SiNetlify, SiSqlite } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const projectsData = [
    {
        title: 'Foodies Empire',
        preview: '/project-images/foodies-empire-front.png',
        description:
            'Foodies Empire is a food recipe sharing application designed to connect food enthusiasts worldwide. Built with Next.js 14 and SQLite for the database, Foodies Empire allows offers a seamless and intuitive platform for users to discover and share their favorite recipes.',
        techStack: [
            <TbBrandNextjs size={25} title='Next.js' />,
            <SiSqlite size={25} title='SQLite' />,
        ],
        github: 'https://github.com/Parikhit/foodies-empire-next-app',
        link: 'https://foodies-empire.vercel.app/',
    },
    {
        title: 'Royal Closet',
        preview: '/project-images/royal-closet-front.png',
        description:
            'Royal-Closet is a dynamic e-commerce website with a focus on user experience and functionality. Ensured a seamless online shopping experience through efficient state management using React and Redux-Toolkit.',
        techStack: [
            <FaReact size={25} style={{ color: '#61DBFB' }} title='Reactjs' />,
            <SiRedux size={25} style={{ color: 'purple' }} title='Redux' />,
            <SiStyledcomponents size={35} style={{ color: 'e0ac69' }} title='Styled-Components' />,
            <SiFirebase size={25} style={{ color: 'orange' }} title='Firebase' />,
            <SiNetlify size={25} style={{ color: '#008080' }} title='Netlify' />,
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
            <FaReact size={25} style={{ color: '#61DBFB' }} title='Reactjs' />,
            <SiNetlify size={25} style={{ color: '#008080' }} title='Netlify' />,
        ],
        github: 'https://github.com/Parikhit/health-fitness-app',
        link: 'https://health-fitness-app.netlify.app/',
    },
    {
        title: 'Meta',
        preview: '/project-images/github-finder-front.png',
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        techStack: [<FaReact size={25} style={{ color: '#61DBFB' }} title='Reactjs' />],
        github: '',
        link: 'https://meta.com',
    },
    {
        title: 'Amazon',
        preview: '/project-images/github-finder-front.png',
        description:
            'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
        techStack: [<FaReact size={25} style={{ color: '#61DBFB' }} title='Reactjs' />],
        github: '',
        link: 'https://amazon.com',
    },
    {
        title: 'Cloudway',
        preview: '/project-images/Cloudway-front.png',
        description:
            'A fully responsive cloud hosting website from scratch using HTML and CSS. and finally deployed using Netlify.',
        techStack: [
            <FaHtml5 size={25} style={{ color: '#e34c26' }} title='HTML' />,
            <FaCss3Alt size={25} style={{ color: '#2965f1' }} title='CSS' />,
            <SiNetlify size={25} style={{ color: '#008080' }} title='Netlify' />,
        ],
        github: 'https://github.com/Parikhit/Cloudway',
        link: 'https://github.com/Parikhit/Cloudway',
    },
];
