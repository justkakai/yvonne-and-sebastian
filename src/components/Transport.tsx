/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
import image from '../images/transport.jpg';

function Transport() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Image src={image} borderRadius='full' alt='Dan Abramov' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf={'center'}/>
				<Box textAlign={'left'}>
                These are the three recommended ways to travel to Diani:
				</Box>
				<Box textAlign={'left'}>
					<Text>Book a flight with <Link href='https://www.jambojet.com/en-US' isExternal variant={'deco'}>Jambo Jet</Link> , <Link href='https://www.flysafarilink.com/en' isExternal variant={'deco'}>Safarilink</Link> or <Link href='https://www.flyals.com/' isExternal variant={'deco'}>Fly ALS</Link> from Nairobi Wilson to Ukunda Diani. Each flight takes about one hour.</Text>
					<Text>Cost of return trip ranges from <Text as='b'>$40/KSH 6,000</Text> to <Text as='b'>$100/KSH 15,000</Text></Text>
				</Box>
				<Box textAlign={'left'}>
					<Text>Take the high-speed train (<Link href='https://metickets.krc.co.ke/' isExternal variant={'deco'}>Madaraka Express</Link>) from Nairobi to Mombasa. Each train leaves daily either at 15PM or 22PM and takes about six hours.</Text>
					<Text>Then take an Uber or Taxi to Diani, which will go over the ferry. Without traffic, this ride could take one hour.</Text>
					<Text>Cost of a return trip ranges from <Text as='b'>$38/KSH 5800</Text> to <Text as='b'>$60/KSH 9,000</Text></Text>
				</Box>
				<Box textAlign={'left'}>
					<Text>Have a scenic road trip from Nairobi to Diani.</Text>
					<Text>Take a bus from Nairobi to Diani. The bus ride takes about ten hours.</Text>
					<Text>Cost of return trip ranges from <Text as='b'>$16/KSH 2,500</Text> to <Text as='b'>$26/KSH 4,000</Text></Text>
				</Box>
				<Box textAlign={'left'}>
                Hiring a car is also possible but not recommended – unless you are familiar with driving on Kenyan roads.
				</Box>
			</Flex>
		</Box>
	);
}

export default Transport;
