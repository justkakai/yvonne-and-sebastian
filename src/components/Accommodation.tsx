/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Text, Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import { BiHeartCircle } from 'react-icons/bi';
import image from '../images/accomodation.jpg';
/* import diamondsLeisure from '../images/diamonds-leisure.jpeg';
import safariBeach from '../images/safari-beach.jpeg';
import bahariDhow from '../images/bahari-dhow.jpeg'; */

function Accommodation() {

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
				/>
				<Box textAlign={'left'}>
				The recommended accommodation is sorted out into two types; hotels and villas/apartments.
				</Box>
				<Box>
					<Flex gap={4} justifyContent={'space-between'}>
						<Box textAlign={'left'}>
							<Text borderBottom={'1px solid grey'}
								mb={4} display='inline-block'>
									Hotels
							</Text>
							<Text mb={2}>Hotels in Diani have easy access to diverse food options and essential amenities like WiFi and air conditioning, ensuring a comfortable and worry-free stay.</Text>
							<List>
								<ListItem>
									<ListIcon as={BiHeartCircle} color='green.500' />
    									Diamond Leisure Beach & Golf Resort (Wedding venue)
								</ListItem>
								<ListItem>
									<ListIcon as={BiHeartCircle} color='green.500' />
    									Baobab Beach Resort & Spa
								</ListItem>
								<ListItem>
									<ListIcon as={BiHeartCircle} color='green.500' />
   										 Leopard Beach Resort & Spa
								</ListItem>
								<ListItem>
									<ListIcon as={BiHeartCircle} color='green.500' />
    									Aqua Resort
								</ListItem>
							</List>
						</Box>
						{/* <Image
							src={diamondsLeisure}
							alt='Diamond Leisure Beach & Golf Resort'
							objectFit={'cover'}
							boxSize={300}
							loading='lazy'
						/> */}
					</Flex>
				</Box>
				<Box>
					<Flex gap={4} justifyContent={'space-between'}>
						<Box textAlign={'left'}>
							<Text borderBottom={'1px solid grey'}
								mb={4} display='inline-block'>
									Villas/Apartments
							</Text>
							<Text mb={2}>Choosing villas or apartments in Diani allows international visitors to enjoy the perks of privacy with their own pool, cost-effectiveness, and the comfort of home-like amenities including a mini kitchen, WiFi, and air conditioning (limited) (kujipikia).</Text>
							<List>
								<ListItem>
									<ListIcon as={BiHeartCircle} color='green.500' />
									Bahari Dhow Beach Villas
								</ListItem>
								<ListItem>
									<ListIcon as={BiHeartCircle} color='green.500' />
									Diani Wonder Apartments No.5
								</ListItem>
							</List>
						</Box>
						{/* <Image
							src={safariBeach}
							alt='Safari Beach Hotel'
							objectFit={'cover'}
							boxSize={300}
							loading='lazy'
						/> */}
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}

export default Accommodation;
