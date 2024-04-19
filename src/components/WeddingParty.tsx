/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';

import yvette from '../images/yvette.jpeg';
import joanne from '../images/joanne.jpeg';
import adeva from '../images/adeva.jpeg';
import kakai from '../images/kakai2.jpg';
import heart from '../images/heart.png';
import Page from './layout/Page';

const weddingParty = [
	{
		id: 1,
		name: 'Yvette Munee Mutua',
		role: 'Maid of Honor',
		image: yvette,
		text: 'Sister of the bride / maid of honor. Catch me moonwalking on the dance floor. Diagnosed with joy so watch out because I’ll be  spreading infectious laughs. Can’t wait to celebrate yvonne and Seb’s love with all of you!'
	},
	{
		id: 2,
		name: 'Joanne Magare',
		role: 'Bridesmaid',
		image: joanne,
		text: 'Childhood bestie of the bride. (I don’t know what else to say 🤣🤣🤣) I slay for a living? 🫣😅 Yvonne you have officially opened the doors for the rest of us. Wishing you and Sebastian lots of love and joy and amazing segggsssss 💃🏾❤️'
	},
	{
		id: 3,
		name: 'Adeva Kimmy Prince',
		role: 'Bridesmaid',
		image: adeva,
		text: ''
	},
	{
		id: 4,
		name: 'Bianca Kibwage',
		role: 'Bridesmaid',
		image: '',
		text: ''
	},
	{
		id: 5,
		name: 'Cynthia Mogoi',
		role: 'Bridesmaid',
		image: '',
		text: ''
	},
	{
		id: 6,
		name: 'Christine Rolle',
		role: 'Bridesmaid',
		image: '',
		text: ''
	},
	{
		id: 7,
		name: 'Charlene',
		role: 'Bridesmaid',
		image: '',
		text: ''
	},
	{
		id: 8,
		name: 'Kakai Wapenyi',
		role: 'Bridesmaid',
		image: kakai,
		text: ''
	}
];

function WeddingParty() {

	return (
		<Box>
			<Page gap={0}>
				<Text textAlign={'left'} mb={10}>Meet Our Wakandan BrideVengers!</Text>
				<Text textAlign={'left'} mb={4}>As we begin our lifelong journey, we are blessed to have an extraordinary group of women as our bridesmaids, who are our chosen sisters, confidantes, and cheerleaders, accompanying us through every moment.</Text>
				<Text textAlign={'left'} mb={16}>They each add joy, wisdom, and love to our lives, and we're excited to introduce these incredible women who will be walking down the aisle before us.</Text>
				<Flex
					flexWrap={'wrap'}
					direction={['column', null, null, 'row']}
					// justifyContent={'space-between'}
				>
					{weddingParty.map((entry, i) => (
						<Flex
							key={`wedding_party_${entry.name}`}
							flex={'calc(50% - 10px)'}
							direction={'column'}
							alignItems={'start'}
							mb={20}
							ml={[0, null, null, i % 2 !== 0 ? 5 : 0]}
						>
							<Image
								src={entry.image ? entry.image : heart}
								alt={entry.name}
								objectFit={'cover'}
								boxSize={300}
								loading='lazy'
								border={'2px solid gray'}
								mb={4}
							/>
							{/* <Text as={'b'} fontSize={'xl'}>
								{entry.name}
							</Text> */}
							<Heading size='md' mb={2}>{entry.name}</Heading>
							<Text mb={6}>
								{entry.role}
							</Text>
							{entry.text && <Text textAlign={'left'}>
								{entry.text}
							</Text>}
						</Flex>
					))}
				</Flex>
			</Page>
		</Box>
	);
}

export default WeddingParty;
