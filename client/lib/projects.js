import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {
    SiRedux,
    SiStyledcomponents,
    SiFirebase,
    SiNetlify,
    SiSqlite,
    SiTailwindcss,
    SiExpress,
    SiApollographql,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';

export const projectsData = [
    {
        title: 'Imperial Properties (MERN)',
        preview: '/project-images/imperial-properties-front.png',
        description:
            'It is a robust real estate platform designed to revolutionise property listing management and user experience. Features- Secure authentication with JWT, Firebase, and Google OAuth, MVC architecture. REST API best practices, MongoDB for property CRUD.Redux-Toolkit for managing user state. Efficient search and sort functionality. Deployed on Render for scalability',
        techStack: [
            <FaReact
                size={25}
                style={{ color: '#61DBFB' }}
                title='Reactjs'
            />,
            <SiRedux
                size={25}
                style={{ color: 'purple' }}
                title='Redux'
            />,
            <FaNodeJs
                size={25}
                style={{ color: 'green' }}
                title='Nodejs'
            />,
            <SiExpress
                size={25}
                title='Expressjs'
            />,
            <DiMongodb
                size={25}
                style={{ color: 'green' }}
                title='MongoDB'
            />,
            <SiFirebase
                size={25}
                style={{ color: 'orange' }}
                title='Firebase'
            />,
            <SiTailwindcss
                size={25}
                style={{ color: 'teal' }}
                title='TailwindCSS'
            />,
        ],
        github: 'https://github.com/Parikhit/mern-estate',
        link: 'https://imperial-properties.onrender.com/',
    },
    {
        title: 'Royal Closet (e-Commerce App)',
        preview: '/project-images/royal-closet-front.png',
        description:
            'Royal-Closet is a dynamic e-commerce website with a focus on user experience and functionality. Ensured a seamless online shopping experience through efficient state management using React and Redux-Toolkit.',
        techStack: [
            <FaReact
                size={25}
                style={{ color: '#61DBFB' }}
                title='Reactjs'
            />,
            <SiRedux
                size={25}
                style={{ color: 'purple' }}
                title='Redux'
            />,
            <SiStyledcomponents
                size={35}
                style={{ color: '#e0ac69' }}
                title='Styled-Components'
            />,
            <SiFirebase
                size={25}
                style={{ color: 'orange' }}
                title='Firebase'
            />,
            <SiNetlify
                size={25}
                style={{ color: '#008080' }}
                title='Netlify'
            />,
        ],
        github: 'https://github.com/Parikhit/royal-closet',
        link: 'https://royal-closet.netlify.app/',
    },
    {
        title: 'Foodies Empire (Next.js 14)',
        preview: '/project-images/foodies-empire-front.png',
        description:
            'Foodies Empire is a food recipe sharing application designed to connect food enthusiasts worldwide. Built with Next.js 14 and SQLite for the database, Foodies Empire allows offers a seamless and intuitive platform for users to discover and share their favorite recipes.',
        techStack: [
            <TbBrandNextjs
                size={25}
                title='Next.js'
            />,
            <SiSqlite
                size={25}
                title='SQLite'
            />,
        ],
        github: 'https://github.com/Parikhit/foodies-empire-next-app',
        link: 'https://foodies-empire.vercel.app/',
    },
    {
        title: 'Task Flow (MERN)',
        preview: '/project-images/task-flow-front.png',
        description:
            'Task Flow is a robust task management application designed to streamline your project management workflow, particularly tailored to handle clients and their associated projects with ease. Developed using cutting-edge technologies including React.js, Node.js, Express, GraphQL, and Apollo Client',
        techStack: [
            <FaReact
                size={25}
                style={{ color: '#61DBFB' }}
                title='Reactjs'
            />,
            <FaNodeJs
                size={25}
                style={{ color: 'green' }}
                title='Nodejs'
            />,
            <SiExpress
                size={25}
                title='Expressjs'
            />,
            <DiMongodb
                size={25}
                style={{ color: 'green' }}
                title='MongoDB'
            />,
            <FaBootstrap
                size={25}
                style={{ color: '#7952b3' }}
                title='Bootstrap'
            />,
            <GrGraphQl
                size={25}
                style={{ color: '#FF00FF' }}
                title='GraphQL'
            />,
            <SiApollographql
                size={25}
                title='Apollo Client'
            />,
        ],
        github: 'https://github.com/Parikhit/MERN-Task-Management-System',
        link: 'https://task-flow-vooz.onrender.com/',
    },

    {
        title: 'Health and Fitness App',
        preview: '/project-images/health-fitness-app-front.png',
        description:
            'Health and Fitness is a react application that enables one to choose and learn from thousands of exercises that is categorized according to various muscle groups. It also has practical examples for every exercise guided by similar exercises and related youtube videos. It makes use of Rapid Api to fetch data',
        techStack: [
            <FaReact
                size={25}
                style={{ color: '#61DBFB' }}
                title='Reactjs'
            />,
            <SiNetlify
                size={25}
                style={{ color: '#008080' }}
                title='Netlify'
            />,
        ],
        github: 'https://github.com/Parikhit/health-fitness-app',
        link: 'https://health-fitness-app.netlify.app/',
    },

    {
        title: 'Cloudway',
        preview: '/project-images/Cloudway-front.png',
        description:
            'A fully responsive cloud hosting website from scratch using HTML and CSS. and finally deployed using Netlify.',
        techStack: [
            <FaHtml5
                size={25}
                style={{ color: '#e34c26' }}
                title='HTML'
            />,
            <FaCss3Alt
                size={25}
                style={{ color: '#2965f1' }}
                title='CSS'
            />,
            <SiNetlify
                size={25}
                style={{ color: '#008080' }}
                title='Netlify'
            />,
        ],
        github: 'https://github.com/Parikhit/Cloudway',
        link: 'https://github.com/Parikhit/Cloudway',
    },
    {
        title: 'Xpress Meals (Mobile App)',
        preview: '/project-images/xpress-meals.png',
        description:
            'Xpress-Meals is a food and restaurants app developed using React Native. It uses React-Navigation for seamless navigation, React Native Paper for interactive modals, and React Native Maps for location tracking of restaurants. Context API was used for for efficient state management, ensuring a responsive and intuitive user experience. The app enables users to explore recipes, discover restaurants, plan meals, and engage with a vibrant foodie community.',
        techStack: [
            <FaReact
                size={25}
                style={{ color: '#61DBFB' }}
                title='React Native'
            />,
            <SiStyledcomponents
                size={35}
                style={{ color: '#e0ac69' }}
                title='Styled-Components'
            />,
        ],
        github: 'https://github.com/Parikhit/XpressMeals',
        link: '',
    },
    {
        title: 'Shape Shift (Mobile App)',
        preview: '/project-images/shape-shift.png',
        description:
            'Welcome to ShapeShift, a fitness app built with React Native, combining the prowess of the Context API, Styled Components, React Navigation, React Native Paper and React Hooks to provide an immersive fitness experience. Track your progress effortlessly with features like calorie counting, workout timing, and detailed logs of full-body exercises.',
        techStack: [
            <FaReact
                size={25}
                style={{ color: '#61DBFB' }}
                title='React Native'
            />,
            <SiStyledcomponents
                size={35}
                style={{ color: 'e0ac69' }}
                title='Styled-Components'
            />,
        ],
        github: 'https://github.com/Parikhit/ShapeShift',
        link: '',
    },
];
