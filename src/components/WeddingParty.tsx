/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

import yvette from '../images/yvette.jpeg';
import joanne from '../images/joanne.jpeg';
import adeva from '../images/adeva.jpeg';

const weddingParty = [
	{
		id: 1,
		name: 'Yvette Munee Mutua',
		role: 'Maid of Honor',
		image: yvette,
		text: 'Sister of the bride / maid of honor  Catch me moonwalking on the dance floor. Diagnosed with joy so watch out because I’ll be  spreading infectious laughs. Can’t wait to celebrate yvonne and Seb’s love with all of you!'
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
	}
];

function WeddingParty() {

	return (
		<Box>
			<Flex
				direction={'column'}
				px={[0, 4, 16, 24, 40]}
				lineHeight={8}
				fontSize={'lg'}
				color={'#4a4a4a'}
			>
				<Text textAlign={'left'} mb={10}>Meet Our Wakandan BrideVengers!</Text>
				<Text textAlign={'left'} mb={4}>As we begin our lifelong journey, we are blessed to have an extraordinary group of women as our bridesmaids, who are our chosen sisters, confidantes, and cheerleaders, accompanying us through every moment.</Text>
				<Text textAlign={'left'} mb={20}>They each add joy, wisdom, and love to our lives, and we're excited to introduce these incredible women who will be walking down the aisle before us.</Text>
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
							ml={i % 2 !== 0 ? 5 : 0}
						>
							<Image
								src={entry.image}
								alt={entry.name}
								objectFit={'cover'}
								boxSize={300}
								loading='lazy'
								border={'2px solid gray'}
								mb={4}
								/* alignSelf={'center'} */
							/>
							<Text as={'b'} /* alignSelf={'center'} */>
								{entry.name}
							</Text>
							<Text mb={6} /* alignSelf={'center'} */>
								{entry.role}
							</Text>
							{entry.text && <Text textAlign={'left'}>
								{entry.text}
							</Text>}
						</Flex>
					))}
				</Flex>
			</Flex>
		</Box>
	);
}

export default WeddingParty;
