/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Text, Box, Heading, Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import { BiHeartCircle } from 'react-icons/bi';
import image from '../images/accomodation.jpg';
import Page from './layout/Page';
/* import diamondsLeisure from '../images/diamonds-leisure.jpeg';
import safariBeach from '../images/safari-beach.jpeg';
import bahariDhow from '../images/bahari-dhow.jpeg'; */

function Accommodation() {
	const [imageLoaded, setImageLoaded] = React.useState(false);

	const accommodationData = [
		{
			title: 'Hotels',
			description: 'Hotels in Diani have easy access to diverse food options and essential amenities like WiFi and air conditioning, ensuring a comfortable and worry-free stay.',
			items: [
				'Diamond Leisure Beach & Golf Resort (Wedding venue)',
				'Baobab Beach Resort & Spa',
				'Leopard Beach Resort & Spa',
				'Aqua Resort'
			]
		},
		{
			title: 'Villas/Apartments',
			description: 'Choosing villas or apartments in Diani allows international visitors to enjoy the perks of privacy with their own pool, cost-effectiveness, and the comfort of home-like amenities including a mini kitchen, WiFi, and air conditioning (limited) (kujipikia).',
			items: [
				'Bahari Dhow Beach Villas',
				'Diani Wonder Apartments No.5'
			]
		}
	];

	return (
		<Page>
			<Image
				src={image}
				borderRadius='full'
				alt='Yvonne and Sebastian'
				objectFit={'cover'}
				boxSize={400}
				loading='lazy'
				alignSelf={'center'}
				onLoad={() => setImageLoaded(true)}
			/>
			{imageLoaded && (
				<>
					<Box textAlign={'left'}>
                            The recommended accommodation is sorted out into two types; hotels and villas/apartments.
					</Box>
					{accommodationData.map((section, index) => (
						<Box key={index}>
							<Flex gap={4} justifyContent={'space-between'}>
								<Box textAlign={'left'}>
									<Heading size='md' mb={4}>{section.title}</Heading>
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
							</Flex>
						</Box>
					))}
					<Box textAlign={'left'}>Please click <Link href='https://www.tripadvisor.com/Hotels-g775870-Diani_Beach_Ukunda_Coast_Province-Hotels.html' isExternal variant={'deco'}>here</Link> or <Link href='https://www.tripadvisor.com/VacationRentals-g775870-Reviews-Diani_Beach_Ukunda_Coast_Province-Vacation_Rentals.html' isExternal variant={'deco'}>here</Link> for more accommodation suggestions and <Link href='https://www.tripadvisor.com/Attractions-g775870-Activities-Diani_Beach_Ukunda_Coast_Province.html' isExternal variant={'deco'}>here</Link> on things to do in Diani. </Box>
				</>
			)}
		</Page>
	);
}

export default Accommodation;
