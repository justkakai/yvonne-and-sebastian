import React from 'react';
import { Flex, Image, Text, Box } from '@chakra-ui/react';
import image from '../images/accomodation.jpg';
import diamondsLeisure from '../images/diamonds-leisure.jpeg';
import safariBeach from '../images/safari-beach.jpeg';
import bahariDhow from '../images/bahari-dhow.jpeg';

function Accommodation() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
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
				The recommended accommodation is sorted out into three price points, Expensive, affordable, and cheap.
				</Box>
				<Box>
					<Flex gap={4} justifyContent={'space-between'}>
						<Box textAlign={'left'}>
							<Text borderBottom={'1px solid grey'}
								mb={4} display='inline-block'>
									Expensive: One night max. $150 / KSH. 23,000
							</Text>
							<Text>Diamond Leisure Beach & Golf Resort</Text>
							<Text>Baobab Beach Resort & Spa</Text>
							<Text>Leopard Beach Resort & Spa</Text>
							<Text>Swahili Beach Resort</Text>
						</Box>
						<Image
							src={diamondsLeisure}
							alt='Diamond Leisure Beach & Golf Resort'
							objectFit={'cover'}
							boxSize={300}
							loading='lazy'
						/>
					</Flex>
				</Box>
				<Box>
					<Flex gap={4} justifyContent={'space-between'}>
						<Box textAlign={'left'}>
							<Text borderBottom={'1px solid grey'}
								mb={4} display='inline-block'>
									Affordable: One night max. $90 / KSH 14,000
							</Text>
							<Text>Diani Reef Hotel</Text>
							<Text>Safari Beach Hotel</Text>
							<Text>Aqua Resort</Text>
							<Text>Aman Luxury Apartments</Text>
						</Box>
						<Image
							src={safariBeach}
							alt='Safari Beach Hotel'
							objectFit={'cover'}
							boxSize={300}
							loading='lazy'
						/>
					</Flex>
				</Box>
				<Box>
					<Flex gap={4} justifyContent={'space-between'}>
						<Box textAlign={'left'}>
							<Text borderBottom={'1px solid grey'}
								mb={4} display='inline-block'>
									Cheap one night max. $32 / KSH 4,900
							</Text>
							<Text>Bahari Dhow Beach Villas</Text>
							<Text>Casa Bougan Apartments</Text>
							<Text>Tradewinds Lodge</Text>
							<Text>Simba Apartments</Text>
							<Text>Kijani Cottages - Diani</Text>
						</Box>
						<Image
							src={bahariDhow}
							alt='Bahari Dhow Beach Villas'
							objectFit={'cover'}
							boxSize={300}
							loading='lazy'
						/>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}

export default Accommodation;
