import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

function Program() {

	return (
		<Box height={'100vh'}>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Box textAlign={'left'}>
					Please find below tentative programs for planning purposes.
					The final programs will be sent closer to each event. We kindly ask for your patience on this.
				</Box>
				<Box textAlign={'left'}>
					<Text
						fontWeight={'bold'}
						mb={8}
					>
						Meet and greet, October 3rd, 2024 at Diamonds Leisure Beach & Gold Resort
					</Text>
					<Text>8:00 PM - Guests Arrival</Text>
					<Text>9:00 PM - Speeches</Text>
					<Text>10:15 PM - Karaoke Party</Text>
					<Text>11:00 PM - Closing</Text>
					<Text
						fontWeight={'bold'}
						mb={8}
						mt={8}
					>
						Wedding Ceremony, October 4th, 2024 at Diamonds Leisure Beach & Gold Resort
					</Text>
					<Text>3:30 PM - Guests Arrival</Text>
					<Text>4:00 PM - Wedding Ceremony</Text>
					<Text>6:30 PM - Reception Begins</Text>
					<Text>9:00 PM - Party Time</Text>
					<Text>10:00 PM - Reception Ends</Text>
					<Text>11:00 PM - After-Party</Text>
				</Box>
			</Flex>
		</Box>
	);
}

export default Program;
