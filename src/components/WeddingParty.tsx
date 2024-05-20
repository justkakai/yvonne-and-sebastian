/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import {
	Box, Flex, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody /* ModalFooter,  */
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

import yvette from '../images/yvette.jpeg';
import joanne from '../images/joanne.jpeg';
import adeva from '../images/adeva.jpeg';
import bianca from '../images/bianca.jpeg';
import cynthia from '../images/cynthia.jpeg';
import charlene from '../images/charlene.jpeg';
import christine from '../images/christine.jpg';
import kakai from '../images/kakai.jpg';
import heart from '../images/heart.png';
import Page from './layout/Page';

interface WeddingPartyEntry {
	id: number;
	name: string;
	role: string;
	image: string;
	text: string;
	fillColor: string;
}

const weddingParty: WeddingPartyEntry[] = [
	{
		id: 1,
		name: 'Yvette Munee Mutua',
		role: 'Sister of the Bride / Maid of Honor',
		image: yvette,
		text: 'Catch me moonwalking on the dance floor. Diagnosed with joy so watch out because I’ll be spreading infectious laughs. Can’t wait to celebrate Yvonne and Seb’s love with all of you!',
		fillColor: '#75a8e8'
	},
	{
		id: 2,
		name: 'Joanne Magare',
		role: 'Bridesmaid',
		image: joanne,
		text: 'Childhood bestie of the bride. (I don’t know what else to say 🤣🤣🤣) I slay for a living? 🫣😅 Yvonne you have officially opened the doors for the rest of us. Wishing you and Sebastian lots of love and joy and amazing segggsssss 💃🏾❤️',
		fillColor: '#596956'
	},
	{
		id: 4,
		name: 'Bianca Kibwage',
		role: 'Bridesmaid',
		image: bianca,
		text: 'Hello there! I´m Bianca, cousin of the stunning bride and honored to be part of Yvonne and Sebastian´s love journey! 🥹 Growing up with Yvonne has been a treat - we´ve shared countless laughs, adventures, and memories that I´ll treasure forever. When I´m not designing buildings, you can find me exploring new cities, visiting loved ones, dancing the night away, or chasing sunsets on the nearest beach! Cheers to the beautiful couple 🥂',
		fillColor: '#fda051'
	},
	{
		id: 5,
		name: 'Cynthia Mogoi',
		role: 'Bridesmaid',
		image: cynthia,
		text: '',
		fillColor: '#c9b0bc'
	},
	{
		id: 3,
		name: 'Adeva Kimmy Prince',
		role: 'Bridesmaid',
		image: adeva,
		text: '',
		fillColor: '#c2d5eb'
	},
	{
		id: 7,
		name: 'Charlene Guya',
		role: 'Bridesmaid',
		image: charlene,
		text: 'Childhood friend of the bride.',
		fillColor: '#dda78e'
	},
	{
		id: 6,
		name: 'Christine Rolle',
		role: 'Bridesmaid',
		image: christine,
		text: 'Hi everyone, I´m Christine, a proud bridesmaid and friend of the beautiful bride. I’m a homebody for most of the year. When I deign to leave the house, I enjoy long walks, travelling and finding joy in the company of friends. Like the bride, I studied in China which is where I currently work as a teacher. I´m excited to be a part of this memorable occasion and look forward to the beautiful journey ahead!',
		fillColor: '#c7c5c6'
	},
	{
		id: 8,
		name: 'Kakai Wapenyi',
		role: 'Bridesmaid',
		image: kakai,
		text: '',
		fillColor: '#64488e'
	}
];

function WeddingParty() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedEntry, setSelectedEntry] = useState<WeddingPartyEntry | null>(null);

	const openModal = (entry: WeddingPartyEntry) => {
		setSelectedEntry(entry);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setSelectedEntry(null);
	};

	return (
		<Box>
			<Page gap={0}>
				<Text textAlign={'left'} mb={10}>Meet our Wakandan BrideVengers!</Text>
				<Text textAlign={'left'} mb={4}>As we begin our lifelong journey, we are blessed to have an extraordinary group of women as our bridesmaids, who are our chosen sisters, confidantes, and cheerleaders, accompanying us through every moment.</Text>
				<Text textAlign={'left'} mb={16}>They each add joy, wisdom, and love to our lives, and we're excited to introduce these incredible women who will be walking down the aisle before us.</Text>
				<Flex
					flexWrap={'wrap'}
					direction={['column', null, null, 'row']}
				>
					{weddingParty.map((entry, i) => (
						<Flex
							key={`wedding_party_${entry.name}`}
							flex={'calc(50% - 10px)'}
							direction={'column'}
							alignItems={'start'}
							mb={10}
							ml={[0, null, null, i % 2 !== 0 ? 5 : 0]}
						>
							<Image
								src={entry.image ? entry.image : heart}
								alt={entry.name}
								objectFit={'cover'}
								boxSize={300}
								boxShadow='lg'
								borderRadius='lg'
								loading='lazy'
								mb={4}
								onClick={() => openModal(entry)}
								cursor="pointer"
								_hover={{
									transform: 'scale(1.03)',
									boxShadow: 'xl'
								}}
								transition="transform 0.3s, box-shadow 0.2s"
							/>
							<Text fontSize='xl' as={'b'}>{entry.name}</Text>
							<Text mb={6}>
								{entry.role}
							</Text>
						</Flex>
					))}
				</Flex>
			</Page>

			{selectedEntry && (
				<Modal
					autoFocus={false}
					isOpen={isOpen}
					onClose={closeModal}
				>
					<ModalOverlay />
					<ModalContent mx={4}>
						<ModalHeader mt={4}>{selectedEntry.name} <Text display={'inline-block'} verticalAlign={'middle'}><FaHeart color={selectedEntry.fillColor}/></Text></ModalHeader>
						<ModalCloseButton />
						<ModalBody mb={4}>
							<Image
								src={selectedEntry.image}
								alt={selectedEntry.name}
								objectFit="cover"
								width={'100%'}
								borderRadius="lg"
								boxShadow="lg"
								loading='lazy'
								// boxSize="200px"
								height={'auto'}
								mb={4}
								// mx="auto" // Center the image
							/>
							<Text fontWeight="bold" mb={4}>
								{selectedEntry.role}
							</Text>
							{selectedEntry.text ? (
								<Text>{selectedEntry.text}</Text>
							) : ''}
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Box>
	);
}

export default WeddingParty;
