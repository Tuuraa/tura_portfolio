import './resume.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Resume = () => {
    return (
        <div className='resume'>
            <p>Here will be reflected my entire path in the field of information technology: from the first steps and mastering basic skills to achieving significant results, participating in complex projects and constant development in this dynamic and rapidly changing industry</p>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent color='#fff'>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent color='#fff'>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent color='#fff'>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent color='#fff'>Repeat</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Resume