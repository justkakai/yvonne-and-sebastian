/* eslint-disable max-len */
import React from 'react';
import { Box, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { MdCheckCircle, MdWarning } from 'react-icons/md';
import Page from './layout/Page';

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
				/* 'Do check out here for places to stay and here for things to do in Nairobi.', */
				'Do download Uber (Taxi app) to use all over Kenya',
				'Do always have small Kenyan money on you for taking a Tuk-tuk in Diani',
				'Do plan on registering for an MPESA account on your mobile phone.',
				{
					text: 'Do learn a few key phrases or words in the local language(s) to establish rapport with the locals. Below are some that we recommend',
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
				'Don\'t bring any single-use plastic bags, single-use bottle or straws. They are legally banned.',
				'Don\'t plan to fish in national marine parks.',
				'Don\'t disrespect local customs and traditions due to cultural differences.'
			]
		}
	];

	return (
		<Box mt={[0, null, 12]}>
			<Page heading='What to know'>
				{dosAndDonts.map(section => (
					<Box key={section.id}>
						<Heading size='md' mb={4} fontFamily={'body'}>{section.title}</Heading>
						<List spacing={3}>
							{section.items.map((item, index) => {
								if (typeof item === 'string') {
									return (
										<ListItem key={index}>
											<ListIcon as={section.title.includes('DONT') ? MdWarning : MdCheckCircle} color={section.title.includes('DONT') ? 'warning.100' : 'green.500'} />
											{item}
										</ListItem>
									);
								} else {
									return (
										<ListItem key={index}>
											<ListIcon as={MdCheckCircle} color="green.500" />
											{item.text}
											<List pl={0} mt={2}>
												{item.phrases.map((phrase, pIndex) => (
													<ListItem key={pIndex}>
														{/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
														{phrase}
													</ListItem>
												))}
											</List>
										</ListItem>
									);
								}
							})}
						</List>
					</Box>
				))}
			</Page>
		</Box>
	);
}

export default WhatToKnow;
