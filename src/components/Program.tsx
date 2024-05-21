import React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { FaLocationDot } from 'react-icons/fa6';
import { CiCalendarDate } from 'react-icons/ci';
import Page from './layout/Page';

function Program() {
	const events = [
		{
			title: 'Meet and greet',
			date: 'October 3rd, 2024',
			location: 'Diamonds Leisure Beach & Golf Resort',
			schedule: [
				{ time: '8:00 PM', activity: 'Guests Arrival' },
				{ time: '9:00 PM', activity: 'Speeches' },
				{ time: '10:15 PM', activity: 'Karaoke Party' },
				{ time: '11:00 PM', activity: 'Closing' }
			]
		},
		{
			title: 'Wedding Ceremony',
			date: 'October 4th, 2024',
			location: 'Diamonds Leisure Beach & Golf Resort',
			schedule: [
				{ time: '3:30 PM', activity: 'Guests Arrival' },
				{ time: '4:00 PM', activity: 'Wedding Ceremony' },
				{ time: '6:30 PM', activity: 'Reception Begins' },
				{ time: '9:00 PM', activity: 'Party Time' },
				{ time: '10:00 PM', activity: 'Reception Ends' },
				{ time: '11:00 PM', activity: 'After-Party' }
			]
		}
	];

	return (
		<Box>
			<Page heading='Program'>
				<Box textAlign={'left'} mb={4}>
                    Please find below tentative programs for planning purposes.
                    The final programs will be sent closer to each event. We kindly ask for your patience on this.
				</Box>
				<Flex
					textAlign={'left'}
					direction={'column'}
					justifyContent={'space-between'}
					width={'100%'}
				>
					{events.map((event, index) => (
						<Box key={index} mt={index === 0 ? 0 : 12}>
							<Heading size='md' mb={4} fontFamily={'body'}>{event.title}</Heading>
							<Flex alignItems={'start'} mb={2} gap={4}>
								<Box mt={2}><CiCalendarDate /></Box>
								<Text>{event.date}</Text>
							</Flex>
							<Flex alignItems={'start'} mb={6} gap={4}>
								<Box mt={2}><FaLocationDot /></Box>
								<Text>{event.location}</Text>
							</Flex>
							{event.schedule.map((item, idx) => (
								<Text key={idx}>{item.time} - {item.activity}</Text>
							))}
						</Box>
					))}
				</Flex>
			</Page>
		</Box>
	);
}

export default Program;
