import { IoIosSchool } from 'react-icons/io';
import { MdOutlineWork } from 'react-icons/md';

const timelineElements = [
    {
        id: 1,
        title: 'Freelance',
        profile: 'MERN | React Native (Remote)',
        // description: '',
        duration: 'April 2023 - present',
        icon: <MdOutlineWork />,
    },
    {
        id: 2,
        title: 'Optiphoenix Xperts Pvt. Ltd',
        profile: 'Javascript Developer | Frontend (Remote)',
        description:
            'Implemented A/B test variations iterating on design and functionality to optimize user experience and drive key metrics. Worked closely with CROs to define experiment goals and success metrics, ensuring alignment with business objectives and hypothesis validation. Designed and developed reusable React components for A/B test variations, ensuring consistent user experience across different experimental conditions.',
        duration: 'Jan 2023 - April 2023',
        icon: <MdOutlineWork />,
    },
    {
        id: 3,
        title: 'Comviva Technologies Ltd',
        profile: 'Frontend Engineer',
        description:
            'Collaborated closely with UI/UX designers and backend developers to translate design wireframes into interactive user interfaces. Developed responsive and visually appealing frontend components and layouts, ensuring cross-browser compatibility and optimal performance across various devices.',
        duration: 'July 2020 - June 2021',
        icon: <MdOutlineWork />,
    },
    {
        id: 4,
        title: 'Bachelor of Technology',
        profile: 'National Institute of Technology, Silchar',
        description: 'Electronics and Communication Engineering',
        duration: 'July 2016 - Nov 2020',
        icon: <IoIosSchool />,
    },
];

export default timelineElements;
