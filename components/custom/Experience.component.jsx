import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import timelineElements from '@/lib/experience-education';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const Experience = () => {
    return (
        <div id='experience' className='mb-12 relative z-10'>
            <h1 className='text-rose-700 text-4xl text-center font-extrabold mb-8'>
                Experience and Education
            </h1>

            <VerticalTimeline animate={false} lineColor='rgb(24, 17, 154)'>
                {timelineElements.map((element) => {
                    const { title, profile, description, duration, icon } = element;
                    return (
                        <VerticalTimelineElement
                            key={title}
                            contentStyle={{
                                background: 'transparent',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid  red' }}
                            iconStyle={{ background: 'rgb(24, 17, 154)', color: '#fff' }}
                            icon={icon}
                        >
                            <Card className='text-lg hover:border-blue-700 hover:scale-105 transition-transform shadow-xl'>
                                <CardHeader>
                                    <CardTitle>{title}</CardTitle>
                                    <h1>{profile}</h1>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className='text-md'>
                                        {description}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter>{duration}</CardFooter>
                            </Card>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
