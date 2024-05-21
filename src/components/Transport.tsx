/* eslint-disable max-len */
import React from 'react';
import { Image, Box, Flex, Text, Link, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { IoIosPricetag } from 'react-icons/io';
/* import { MdCheckCircle, MdWarning } from 'react-icons/md'; */
import { IoAirplaneOutline, IoCarSportOutline } from 'react-icons/io5';
import { PiTrainLight } from 'react-icons/pi';

import image from '../images/transport.jpg';
import Page from './layout/Page';

const Transport = () => {
	const [imageLoaded, setImageLoaded] = React.useState(false);

	const transportOptions = [
		{
			icon: IoAirplaneOutline,
			title: 'Flight',
			links: [
				{ name: 'Jambo Jet', url: 'https://www.jambojet.com/en-US' },
				{ name: 'Safarilink', url: 'https://www.flysafarilink.com/en' },
				{ name: 'Fly ALS', url: 'https://www.flyals.com/' }
			],
			description1: 'Book a flight from Nairobi to Ukunda/Diani Airport.',
			description2: 'It is possible to fly into Mombasa and then arrange for transportation to Diani by road, which would then be 1 hour 20 minutes away. However, we recommend flying directly to Ukunda/Diani. Each flight takes about one hour.',
			description3: 'We suggest that you avoid booking flights that would require you to travel to the airport during peak rush hour times, that is 7-10am and 3:30-6pm.',
			color: 'green',
			cost: {
				min: '$40 / KSH 6,000',
				max: '$100 / KSH 15,000'
			}
		},
		{
			icon: PiTrainLight,
			title: 'Train',
			links: [{ name: 'Madaraka Express', url: 'https://metickets.krc.co.ke/' }],
			description1: 'Take the high-speed Madaraka Express train from Nairobi to Mombasa, then an Uber or taxi to Diani.',
			description2: 'The train leaves daily at 3pm or 10pm and takes about six hours to get to Mombasa.',
			description3: 'The tickets can only be purchased in person with cash or with MPESA.',
			color: 'green',
			cost: {
				min: '$38 / KSH 5800',
				max: '$60 / KSH 9,000'
			}
		},
		{
			icon: IoCarSportOutline,
			title: 'Car Hire',
			description1: 'Hiring a car is possible but NOT recommended unless you are familiar with Kenyan roads.',
			description2: '',
			description3: '',
			color: 'red'
		}
	];

	return (
		<Page heading='Transport'>
			<Image
				src={image}
				borderRadius='full'
				alt='Transport Options'
				objectFit={'cover'}
				boxSize={400}
				boxShadow={'lg'}
				loading='lazy'
				alignSelf={'center'}
				onLoad={() => setImageLoaded(true)}
			/>
			{imageLoaded && (
				<>
					<Box textAlign={'left'}>
                        There are two recommended ways to travel to Diani.
					</Box>
					{transportOptions.map((option, index) => (
						<Box key={index} mb={4} textAlign={'left'}>
							<Flex gap={2} mb={4} alignItems={'center'}>
								<option.icon color={'brand.500'} size={32} />
								<Heading size='md'>{option.title}</Heading>
							</Flex>
							<Text mb={2}>{option.description1}</Text>
							{option.description2 && <Text mb={2}>{option.description2}</Text>}
							{option.description3 && <Text mb={2}>{option.description3}</Text>}
							<List spacing={2}>
								{option.links && option.links.map((link, linkIndex, array) => (
									<ListItem key={linkIndex} mb={linkIndex === array.length - 1 ? 6 : 0}>
										<ListIcon as={IoIosPricetag} color='black' />
										<Text display='inline-block'>Book with</Text>&nbsp;
										<Link href={link.url} isExternal variant={'deco'} display={'inline-block'}>
											{link.name}
										</Link>
									</ListItem>
								))}
								{option.cost && (
									<ListItem>
										<Text>Prices range from <Text as={'b'}>{option.cost.min}</Text> to <Text as={'b'}>{option.cost.max}</Text></Text>
									</ListItem>
								)}
							</List>
						</Box>
					))}
				</>
			)}
		</Page>
	);
};

export default Transport;
