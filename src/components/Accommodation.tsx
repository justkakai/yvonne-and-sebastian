/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Text, Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import { BiHeartCircle } from 'react-icons/bi';
import image from '../images/accomodation.jpg';
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
		<Box>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
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
										<Text borderBottom={'1px solid grey'} mb={4} display='inline-block'>
											{section.title}
										</Text>
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
					</>
				)}
			</Flex>
		</Box>
	);
}

export default Accommodation;
