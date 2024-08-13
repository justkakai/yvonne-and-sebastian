/* eslint-disable max-len */
import React from 'react';
import { Box, Flex, UnorderedList, List, ListItem, ListIcon, Heading, Collapse, Button } from '@chakra-ui/react';
import { MdCheckCircle, MdWarning, MdExpandLess, MdExpandMore } from 'react-icons/md';
import { FaCity, FaUmbrellaBeach } from 'react-icons/fa';
import Page from './layout/Page';

interface InfoSectionProps {
	title: string;
	info: { id: number; title: string; content: string[] }[];
	isOpen: boolean;
	onToggle: () => void;
	icon?: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, info, isOpen, onToggle, icon }) => (
	<Box>
		<Flex alignItems='center' gap={4}>
			{icon}
			<Button
				variant={'main'}
				fontSize={'xl'}
				pl={0}
				bg='transparent'
				_hover={{ bg: 'transparent' }}
				onClick={onToggle}
				rightIcon={isOpen ? <MdExpandLess /> : <MdExpandMore />}
			>
				{title}
			</Button>
		</Flex>
		<Collapse in={isOpen}>
			<Box mt={4} mb={0} py={4}>
				<UnorderedList spacing={3} ml={4}>
					{info.map((section, i, arr) => (
						<Box key={section.id} mb={i === arr.length-1 ? 0 : 8 }>
							<Heading fontFamily='body' fontSize={18} mb={2}>
								{section.title}
							</Heading>
							<UnorderedList pl={4}>
								{section.content.map((item, index) => (
									<ListItem key={index}>{item}</ListItem>
								))}
							</UnorderedList>
						</Box>
					))}
				</UnorderedList>
			</Box>
		</Collapse>
	</Box>
);

function WhatToKnow() {
	const dosAndDonts = [
		{
			id: 1,
			title: 'Kenya DOs',
			items: [
				'Do get all necessary vaccinations at least four weeks before your departure, including the yellow fever vaccination.',
				'Do purchase travel insurance relevant to your trip.',
				'Do note down international hospitals in Kenya, such as Nairobi Hospital, Diani Beach Hospital, Aga Khan Hospital Nairobi, and Aga Khan Hospital Mombasa, which offer 24-hour doctors on call and in-patient services.',
				'Do ask for permission before capturing photos of people or restricted areas.',
				'Do bring adapters for devices with non-Type G plugs due to Nairobi\'s 240V electricity and British-style outlets.',
				'Do download Uber (Taxi app) to use all over Kenya.',
				'Do always have small Kenyan money on you for taking a Tuk-tuk in Diani.',
				'Do plan on registering for an MPESA account on your mobile phone.',
				{
					text: 'Do learn a few key phrases or words in the local language(s) to establish rapport with the locals. Below are some that we recommend:',
					phrases: [
						'Niaje! = Hello',
						'Pole = Sorry',
						'Habari = How are you?',
						'Mzuri = Fine, Good',
						'Asante = Thank you',
						'Hapana = No',
						'Ndio = Yes',
						'Karibu = You\'re welcome'
					]
				}
			]
		},
		{
			id: 2,
			title: 'Kenya DONTs',
			items: [
				'Don\'t drink tap water. Always drink bottled water.',
				'Don\'t smoke outside designated areas.',
				'Don\'t bring over 250 grams total of any tobacco products, 1 litre of spirits or 2 litres of wine or 500 ml total of perfume and eau de toilette, unless purchased at duty free.',
				'Don\'t work or volunteer in any charity programs without a valid work permit. A valid work permit can be attained through the Directorate of Immigration Services.',
				'Don\'t show public displays of affection like kissing, especially for same-sex relationships.',
				'Don\'t sleep without a mosquito net.',
				'Don\'t plan to drive in Kenya due to potential road hazards, including potholes and unexpected animal crossings, as well as limited visibility at night.',
				'Don\'t bring any single-use plastic bags, single-use bottles or straws. They are legally banned.',
				'Don\'t plan to fish in national marine parks.',
				'Don\'t disrespect local customs and traditions due to cultural differences.'
			]
		}
	];

	const nairobiInfo = [
		{
			id: 1,
			title: 'Money Exchange',
			content: [
				'On arrival to Kenya, it is advised to exchange some cash at the airport to get to your hotel or Airbnb easily. However, do not exchange all your money at the airport - just enough for your immediate needs.',
				'The following day, you may visit a forex bureau in the CBD (Centra Business District/ \'Town\'), such as Satellite Forex Bureau or Sky Forex Bureau.',
				'Several forex bureaus are also located in malls outside the CBD. You can google the one closest to you.',
				'To find the best exchange rates, visit the websites of various bureaus before physically going to exchange your money.'
			]
		},
		{
			id: 2,
			title: 'Connectivity',
			content: [
				'On arrival, you may opt to get a local SIM card at the airport from Safaricom or Airtel.',
				'Alternatively, you can connect to the airport Wi-Fi (note that it is insecure) to call a cab to your destination.',
				'The next day, you can visit a Safaricom or Airtel shop near your hotel or Airbnb, usually located inside the nearest mall.',
				'Ensure you have your passport with you when purchasing a SIM card.'
			]
		},
		{
			id: 3,
			title: 'Transportation',
			content: [
				'The most secure and reliable mode of transportation around Nairobi is Uber.',
				'Make sure to download the app and change your location to Kenya if it is not automatically adjusted.',
				'Uber provides accurate pricing, but some drivers may ask for extra cash. It\'s up to you if you wish to tip.',
				'To avoid any misunderstandings, have the exact fare for the ride you requested.'
			]
		},
		{
			id: 4,
			title: 'Your Stay',
			content: [
				'Book your stay in Nairobi via Booking.com or Airbnb, but do not fully commit to paying the entire amount until you are in Kenya or are just about to arrive. This allows flexibility in case your plans change.',
				'Try to book places that have a flexible cancellation policy.',
				'Most unit check-ins are between 2pm and 3pm East African Time, so plan your flight accordingly.',
				'Secure areas to stay in Nairobi include South B, Kileleshwa, Westlands, Lavington, and South C.',
				'These areas range from expensive to mid-range, but if you are looking to save money while staying in a secure location, consider areas like Roysambu and Pangani.'
			]
		},
		{
			id: 5,
			title: 'Shopping',
			content: [
				'For shopping, especially for food and drinks, stick to reputable supermarkets to avoid counterfeit products.',
				'Major supermarkets like Quickmart, Chandarana, and Carrefour offer a wide range of products, from alcohol and food to toiletries and vegetables.',
				'Note that liquor stores within supermarkets close at around 8pm or 8:30pm East African Time.'
			]
		},
		{
			id: 6,
			title: 'Food',
			content: [
				'The safest places to buy food are supermarkets.',
				'If you prefer not to cook, apps like Uber Eats and Glovo provide food delivery services from renowned companies such as KFC and Burger King, as well as local favorites like Chicken Inn, Galitos, and Artcaffe.',
				'If you wish to dine out, consider restaurants like NewsCafe, Java, Mama Nilishe, Mama Rocks, and CJ\'s.',
				'For a more refined dining experience, try Fifteen Rooftop, Mawimbi Seafood Restaurant, Mandhari Fine Dining Restaurant, or Chophouse in Radisson Blu Upperhill.',
				'For an authentic Kenyan choma (grilled meat) experience, visit Carnivore Restaurant, Njuguna\'s, Red House Grill, The Smith in Rongai, or Kamakis.'
			]
		}
	];

	const dianiInfo = [
		{
			id: 1,
			title: 'Transportation',
			content: [
				'You can travel from Nairobi to Diani by bus, train, flight, or personal vehicle.',
				'Outside of flights, the fastest and safest option is by train, which you may book via the SGR Kenya website.',
				'Be sure of your travel dates, and do not be late, as the refund policy is nearly non-existent.',
				'The most appropriate time to travel is overnight - the 10pm train will arrive early in the morning before it gets too hot.',
				'Upon arrival at the Mombasa terminus, look for vans with placards that say "Diani" and bargain the price.',
				'A general rule in Kenya is that everything is negotiable - do not accept the first offer.',
				'The typical fare should be around 700 KSH to your destination from the Mombasa terminus, though this may vary due to inflation.'
			]
		},
		{
			id: 2,
			title: 'Shopping',
			content: [
				'For shopping, especially for food and drinks, stick to reputable supermarkets to avoid counterfeit products.',
				'Major supermarkets like Quickmart, Chandarana, and Carrefour offer a wide range of products, from alcohol and food to toiletries and vegetables.',
				'Similar to Nairobi, the liquor stores within supermarkets close at around 8pm or 8:30pm East African Time.'
			]
		},
		{
			id: 3,
			title: 'Food',
			content: [
				'As mentioned above, it is safest to buy food at supermarkets.',
				'If you choose to dine out, some great options include: Java House next to Carrefour supermarket, Leonardo’s, Salty Squid, Ali Barbour’s Cave Restaurant, and Blue Marlin.',
				'By this time, we will likely all be together, so we can enjoy the area together.'
			]
		},
		{
			id: 4,
			title: 'Your Stay',
			content: [
				'The best and easiest way to book your stay in Diani is via Booking.com or Airbnb.',
				'Remember to pay only once you are in Kenya, or at the very earliest, just before you arrive and are completely sure of your travel dates.',
				'Try to book places that have a flexible cancellation policy.',
				'Diani is a very tourist-friendly place. However, be decent in your dressing when visiting public places (e.g. avoid walking around in a bikini at the supermarket).',
				'At the beach, such attire is fine of course.',
				'Be aware of "beach boys" who may try to sell you drugs or charm you. If you are not interested, politely decline and be vigilant, especially if you are alone.',
				'While Kenya is generally friendly, the current economic situation has made everyone more eager to make money.',
				'Stay aware of your surroundings at all times.'
			]
		}
	];

	const [showNairobi, setShowNairobi] = React.useState(false);
	const [showDiani, setShowDiani] = React.useState(false);

	return (
		<Box mt={[0, null, 12]}>
			<Page heading='What to Know'>
				<InfoSection
					title="Nairobi Information"
					info={nairobiInfo}
					icon={<FaCity color='#97266D'/>}
					isOpen={showNairobi}
					onToggle={() => setShowNairobi(!showNairobi)}
				/>

				<InfoSection
					title="Diani Information"
					info={dianiInfo}
					icon={<FaUmbrellaBeach color='#2C7A7B'/>}
					isOpen={showDiani}
					onToggle={() => setShowDiani(!showDiani)}
				/>

				{dosAndDonts.map((section) => (
					<Box key={section.id} mb={8}>
						<Heading size='md' mb={4} fontFamily={'body'}>
							{section.title}
						</Heading>
						<List spacing={3}>
							{section.items.map((item, index) => (
								<ListItem key={index}>
									<ListIcon
										as={section.title.includes('DONT') ? MdWarning : MdCheckCircle}
										color={section.title.includes('DONT') ? 'red.500' : 'green.500'}
									/>
									{typeof item === 'string' ? (
										item
									) : (
										<>
											{item.text}
											<List pl={6} mt={2}>
												{item.phrases.map((phrase, pIndex) => (
													<ListItem key={pIndex}>{phrase}</ListItem>
												))}
											</List>
										</>
									)}
								</ListItem>
							))}
						</List>
					</Box>
				))}
			</Page>
		</Box>
	);
}

export default WhatToKnow;
