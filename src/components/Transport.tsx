/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';
import image from '../images/transport.jpg';

function Transport() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Image src={image} borderRadius='full' alt='Dan Abramov' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf={'center'}/>
				<Box textAlign={'left'}>
                These are the three recommended ways to travel to Diani
				</Box>
				<Box textAlign={'left'}>
                Book a flight with (Jambo Jet, Safari Link or Fly ALS) from Nairobi Wilson to Ukunda Diani. Each flight takes about one hour. Cost of return trip ranges from $40/KSH 6,000 to $100/KSH 15,000
				</Box>
				<Box textAlign={'left'}>
                Take the high-speed train (Madaraka Express) from Nairobi to Mombasa. Each train leaves daily either at 15PM or 22PM and takes about six hours. Then take an Uber or Taxi to Diani, which will go over the ferry. Without traffic, this ride could take one hour. Cost of return trip ranges from $38/KSH 5800 to $60/KSH 9,000
				</Box>
				<Box textAlign={'left'}>
                Have a scenic road trip from Nairobi to Diani. Take a bus from Nairobi to Diani. The bus ride takes about ten hours. Cost of return trip ranges from $16/ KSH 2,500 to $26/KSH 4,000
				</Box>
				<Box textAlign={'left'}>
                Hiring a car is also possible but not recommended – unless you are familiar with driving on Kenyan roads.
				</Box>
			</Flex>
		</Box>
	);
}

export default Transport;
