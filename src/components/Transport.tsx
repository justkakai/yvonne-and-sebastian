/* eslint-disable max-len */
import React from 'react';
import { Image, Box, Flex, Text, Link, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { IoIosPricetag } from 'react-icons/io';
import { MdCheckCircle, MdWarning } from 'react-icons/md';

import image from '../images/transport.jpg';
import Page from './layout/Page';

const Transport = () => {
	const [imageLoaded, setImageLoaded] = React.useState(false);

	const transportOptions = [
		{
			icon: MdCheckCircle,
			title: 'Flight',
			links: [
				{ name: 'Jambo Jet', url: 'https://www.jambojet.com/en-US' },
				{ name: 'Safarilink', url: 'https://www.flysafarilink.com/en' },
				{ name: 'Fly ALS', url: 'https://www.flyals.com/' }
			],
			description: 'Book a flight from Wilson Airport (Nairobi) to Ukunda Airport (Diani). Each flight takes about one hour.',
			color: 'green',
			cost: {
				min: '$40 / KSH 6,000',
				max: '$100 / KSH 15,000'
			}
		},
		{
			icon: MdCheckCircle,
			title: 'Train',
			links: [{ name: 'Madaraka Express', url: 'https://metickets.krc.co.ke/' }],
			description: 'Take the high-speed Madaraka Express train from Nairobi to Mombasa, then an Uber or Taxi to Diani. The train leaves daily at 3pm or 10pm and takes about six hours.',
			color: 'green',
			cost: {
				min: '$38 / KSH 5800',
				max: '$60 / KSH 9,000'
			}
		},
		{
			icon: MdCheckCircle,
			title: 'Bus',
			description: 'Enjoy a scenic bus trip from Nairobi to Diani, which takes about ten hours.',
			color: 'green',
			cost: {
				min: '$16 / KSH 2,500',
				max: '$26 / KSH 4,000'
			}
		},
		{
			icon: MdWarning,
			title: 'Car Hire',
			description: 'Hiring a car is possible but not recommended unless familiar with Kenyan roads.',
			color: 'red'
		}
	];


	return (
		<Box>
			<Page>
				<Image
					src={image}
					borderRadius='full'
					alt='Transport Options'
					objectFit={'cover'}
					boxSize={400}
					loading='lazy'
					alignSelf={'center'}
					onLoad={() => setImageLoaded(true)}
				/>
				{imageLoaded && (
					<>
						<Box textAlign={'left'}>
                            These are the three recommended ways to travel to Diani.
						</Box>
						{transportOptions.map((option, index) => (
							<Box key={index} mb={4} textAlign={'left'}>
								<Flex gap={2} mb={4} alignItems={'center'}>
									<option.icon color={option.color} />
									<Heading size='md'>{option.title}</Heading>
								</Flex>
								<Text mb={2}>{option.description}</Text>
								<List spacing={2}>
									{option.links && option.links.map((link, linkIndex, array) => (
										<ListItem key={linkIndex} mb={linkIndex === array.length-1 ? 6 : 0}>
											<ListIcon as={IoIosPricetag} color='black' />
											<Text display='inline-block'>Book with</Text>&nbsp;
											<Link href={link.url} isExternal variant={'deco'} display={'inline-block'}>
												{link.name}
											</Link>
										</ListItem>
									))}
									{option.cost && (
										<ListItem >
											<Text>Prices range from <Text as={'b'}>{option.cost.min}</Text> to <Text as={'b'}>{option.cost.max}</Text></Text>
										</ListItem>
									)}
								</List>
							</Box>
						))}
					</>
				)}
			</Page>
		</Box>
	);
};

export default Transport;
