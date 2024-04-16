import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { FaLocationDot } from 'react-icons/fa6';
import { CiCalendarDate } from 'react-icons/ci';

function Program() {

	return (
		<Box height={'100vh'}>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Box textAlign={'left'}>
					Please find below tentative programs for planning purposes.
					The final programs will be sent closer to each event. We kindly ask for your patience on this.
				</Box>
				<Flex
					textAlign={'left'}
					direction={['column', null, null, null, 'row']}
					justifyContent={['auto', null, null, null, 'space-between']}
					width={['auto', null, null, null, '100%']}
				>
					<Box>
						<Flex mb={2}>
							<Text
								fontWeight={'bold'}
							>
						MEET AND GREET
							</Text>
						</Flex>
						<Flex alignItems={'center'} mb={2} gap={4}>
							<CiCalendarDate />
							<Text
								fontWeight={'bold'}
							>
						October 3rd, 2024
							</Text>
						</Flex>
						<Flex alignItems={'center'} mb={6} gap={4}>
							<FaLocationDot />
							<Text
								fontWeight={'bold'}
							>
						Diamonds Leisure Beach & Golf Resort
							</Text>
						</Flex>
						<Text>8:00 PM - Guests Arrival</Text>
						<Text>9:00 PM - Speeches</Text>
						<Text>10:15 PM - Karaoke Party</Text>
						<Text>11:00 PM - Closing</Text>
					</Box>
					<Box mt={[12, null, null, null, 0]}>
						<Flex mb={2}>
							<Text
								fontWeight={'bold'}
							>
						WEDDING CEREMONY
							</Text>
						</Flex>
						<Flex alignItems={'center'} mb={2} gap={4}>
							<CiCalendarDate />
							<Text
								fontWeight={'bold'}
							>
						October 4th, 2024
							</Text>
						</Flex>
						<Flex alignItems={'center'} mb={6} gap={4}>
							<FaLocationDot />
							<Text
								fontWeight={'bold'}
							>
						Diamonds Leisure Beach & Golf Resort
							</Text>
						</Flex>
						<Text>3:30 PM - Guests Arrival</Text>
						<Text>4:00 PM - Wedding Ceremony</Text>
						<Text>6:30 PM - Reception Begins</Text>
						<Text>9:00 PM - Party Time</Text>
						<Text>10:00 PM - Reception Ends</Text>
						<Text>11:00 PM - After-Party</Text>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}

export default Program;
