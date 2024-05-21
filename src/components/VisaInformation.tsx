/* eslint-disable max-len */
import React, { useState } from 'react';
import {
	Box,
	Text,
	Select,
	VStack,
	List,
	ListItem,
	ListIcon,
	Heading
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Page from './layout/Page';

function VisaInformation() {
	const [selectedCountry, setSelectedCountry] = useState('');

	// Maps countries to their visa requirement types
	const visaInfo = {
		'American': 'e-Visa',
		'British': 'e-Visa',
		'Dominican': 'eTA',
		'Malawian': 'eTA',
		'Nigerian': 'e-Visa',
		'Moroccan': 'e-Visa',
		'Ethiopian': 'eTA',
		'Zimbabwean': 'eTA',
		'Mozambican': 'e-Visa',
		'Honduran': 'e-Visa',
		'Italian': 'e-Visa',
		'Ghanaian': 'eTA',
		'French': 'e-Visa',
		'German': 'e-Visa'
	};

	const visaDetails = {
		generalInfo: [
			'All travelers must obtain an e-Visa/eTA before travel',
			'East African Community nationals are exempt from the eTA requirement (Kenya, Burundi, Rwanda, South Sudan, Tanzania, and Uganda)',
			'The eTA is only valid for one trip and affected travelers must obtain a new eTA for each visit to Kenya',
			'Each adult visitor to the Republic of Kenya is required to submit e-VISA applications in their personal eCitizen account. Parents can apply for their children in the parent\'s account.',
			'If you are traveling alone with children, border officials may require custody documents or notarized written consent from the other parent',
			'You must have a valid passport for at least six (6) months after your planned date of arrival into Kenya, with at least two blank pages',
			'Passport-type photo',
			'Contact information, email address and phone number',
			'Details of your arrival and departure itinerary',
			'Accommodation booking confirmation(s)',
			'Credit card, debit card, or other means of payment',
			'The e-Visa printout must be presented at the port of entry.',
			'It should take at least 3 working days to get your e-Visa.',
			'There are no visas or eTAs offered on arrival'
		],
		touristRequirements: [
			'Travel itinerary (Details about places to visit if going as a tourist)',
			'Hotel bookings',
			'A return air ticket',
			'A clear passport bio data page',
			'A clear photograph',
			'A local ID or passport for dual citizens (at point of entry)'
		],
		applicationSteps: [
			'Click on <b>Create an account</b>',
			'Click on <b>e-Visa application</b>',
			'Fill in the application form',
			'Pay using a Visa Card, Mastercard and other debit or credit cards',
			'Await approval then download and print the e-Visa from your e-Visa account',
			'Present your printed e-Visa to the immigration officer at the port of entry',
			'You can always check the status of your application online'
		],
		customsAllowances: [
			'250 grams total of any tobacco products. This is restricted to travellers 18 years and over',
			'1 litre of spirits or 2 litres of wine. This is restricted to travellers 18 years and over',
			'500ml total of perfume and eau de toilette, of which not more than 125ml may be perfume'
		]
	};

	const handleChange = (event) => {
		setSelectedCountry(event.target.value);
	};

	const formatTitle = (key) => {
		const spacedText = key.replace(/([A-Z])/g, ' $1').trim();
		return spacedText.replace(/\b\w/g, (c: string) => c.toUpperCase());
	};

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const renderTextWithHtml = (text) => <span dangerouslySetInnerHTML={{ __html: text }} />;

	return (
		<Box>
			<Page heading='Visa Information'>
				<VStack spacing={4}>
					<Select placeholder="Select your nationality" onChange={handleChange}>
						{Object.keys(visaInfo).map(country => (
							<option key={country} value={country}>{country}</option>
						))}
					</Select>
					{selectedCountry && (
						<Text fontSize="xl">
							As a {selectedCountry} national, you need to apply for an <b>{visaInfo[selectedCountry]}</b>.
						</Text>
					)}
					<Text textAlign={'left'} width={'100%'} mt={8}>The best option to use is to travel on a tourist visa.</Text>
					<Text textAlign={'left'} width={'100%'} mb={6}>Visit Visa is also an option which requires an invitation letter from a family member/ travel agent in Kenya.</Text>
					<List spacing={3} width="100%">
						{Object.entries(visaDetails).map(([key, values]) => (
							<Box key={key} py={4} textAlign={'left'}>
								<Heading size='md' mb={4}>{formatTitle(key)}</Heading>
								{values.map((item, index) => (
									<ListItem key={index} display={'flex'} alignItems="start" mb={2} gap={1}>
										<ListIcon as={MdCheckCircle} color="green.500" mt={2} />
										<Text textAlign={'left'} wordBreak="break-word">
											{key === 'applicationSteps' ? renderTextWithHtml(item) : item}
										</Text>
									</ListItem>
								))}
							</Box>
						))}
					</List>
				</VStack>
			</Page>
		</Box>
	);
}

export default VisaInformation;
