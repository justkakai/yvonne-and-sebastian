/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Text, Box, Heading, Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import { BiHeartCircle } from 'react-icons/bi';
import image from '../images/accomodation-compressed.jpg';
import Page from './layout/Page';
import diamondsLeisure from '../images/diamonds-leisure.jpeg';
import bahariDhow from '../images/bahari-dhow.jpeg';

function Accommodation() {
	const [imageLoaded, setImageLoaded] = React.useState(false);

	const accommodationData = [
		{
			title: 'Hotels',
			description: 'Hotels in Diani have easy access to diverse food options and essential amenities like WiFi and air conditioning, ensuring a comfortable and worry-free stay.',
			items: [
				'Diamonds Leisure Beach & Golf Resort (Wedding venue)',
				'Baobab Beach Resort & Spa',
				'Leopard Beach Resort & Spa',
				'Ocean Village Club (adults only)',
				'Aqua Resort',
				'Boxo Diani'
			],
			image: diamondsLeisure,
			caption: 'Diamonds Leisure Beach & Golf Resort'
		},
		{
			title: 'Villas/Apartments',
			description: 'Choosing villas or apartments in Diani allows international visitors to enjoy the perks of privacy with their own pool, cost-effectiveness, and the comfort of home-like amenities including a mini kitchen, WiFi, and air conditioning (limited) (kujipikia).',
			items: [
				'Bahari Dhow Beach Villas',
				'Diani Wonder Apartments No.5',
				'Elna´s Haven Diani Palms'
			],
			image: bahariDhow,
			caption: 'Bahari Dhow Beach Villas'
		}
	];

	return (
		<Page heading='Accommodation'>
			<Image
				src={image}
				borderRadius='full'
				alt='Yvonne and Sebastian'
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
                        The recommended accommodation is sorted out into two types: hotels and villas/apartments.
					</Box>
					{accommodationData.map((section, index, array) => (
						<Box key={index} mb={index === array.length-1 ? 4 : 8 }>
							<Flex gap={4} justifyContent={'space-between'} alignItems={'flex-start'} direction={{ base: 'column', md: 'row' }}>
								<Box flex={1} textAlign={'left'}>
									<Heading size='md' mb={4}>{section.title}</Heading>
									<Flex gap={4} direction={{ base: 'column', md: 'row' }}>
										<Box flex={1}>
											<Text mb={2}>{section.description}</Text>
											<List>
												{section.items.map((item, itemIndex) => (
													<ListItem key={itemIndex}>
														<ListIcon as={BiHeartCircle} color='green.500' />
														{item}
													</ListItem>
												))}
											</List>
										</Box>
										<Box width={{ base: '100%', md: 200 }}>
											<Image
												src={section.image}
												alt={section.title}
												objectFit={'cover'}
												borderRadius='lg'
												boxShadow='lg'
												width="100%"
												height={60}
												loading='lazy'
												mt={{ base: 4, md: 0 }}
											/>
											<Text mt={2} textAlign="center" fontSize="sm" color="gray.500" width="100%">
												Photo: {section.caption}
											</Text>
										</Box>
									</Flex>
								</Box>
							</Flex>
						</Box>
					))}
					<Box textAlign={'left'}>You can find more information on Tripadvisor regarding <Link href='https://www.tripadvisor.com/Hotels-g775870-Diani_Beach_Ukunda_Coast_Province-Hotels.html' isExternal variant={'deco'}>hotels</Link> and <Link href='https://www.tripadvisor.com/VacationRentals-g775870-Reviews-Diani_Beach_Ukunda_Coast_Province-Vacation_Rentals.html' isExternal variant={'deco'}>vacation rentals</Link>, as well as <Link href='https://www.tripadvisor.com/Attractions-g775870-Activities-Diani_Beach_Ukunda_Coast_Province.html' isExternal variant={'deco'}>things to do in Diani</Link>.</Box>
				</>
			)}
		</Page>
	);
}

export default Accommodation;
