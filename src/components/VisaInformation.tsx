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
		'American': 'E-Visa',
		'British': 'E-Visa',
		'Dominican': 'ETA',
		'Malawian': 'ETA',
		'Nigerian': 'E-VISA',
		'Moroccan': 'E-VISA',
		'Ethiopian': 'ETA',
		'Zimbabwe': 'ETA',
		'Mozambique': 'E-VISA',
		'Honduras': 'E-VISA',
		'Italian': 'E-VISA',
		'Ghanaian': 'ETA',
		'French': 'E-VISA',
		'German': 'E-VISA'
	};

	const visaDetails = {
		generalInfo: [
		  'All travelers must obtain an E-VISA/ETA before travel',
		  'East African Community nationals are exempt from the ETA requirement (Kenya, Burundi, Rwanda, South Sudan, Tanzania, and Uganda)',
		  'The ETA is only valid for one trip and affected travelers must obtain a new ETA for each visit to Kenya',
		  'Each adult visitor to the Republic of Kenya is required to submit E-VISA applications in their personal E citizen account. Parents can apply for their children in the parent\'s account.',
		  'If you are traveling alone with children, border officials may require custody documents or notarized written consent from the other parent',
		  'Valid passport for at least six (6) months after your planned date of arrival into Kenya, with at least two blank pages',
		  'Passport-type photo',
		  'Contact information, email address and phone number',
		  'Details of your arrival and departure itinerary',
		  'Accommodation booking confirmation(s)',
		  'Credit card, debit card, or other means of payment',
		  'The e-Visa printout must be presented at the port of entry.',
		  'It should take at least 3 working days to get your E-Visa.',
		  'There are no VISAs on arrival'
		],
		touristRequirements: [
		  'Travel itinerary (Details about places to visit if going as a tourist)',
		  'Hotel bookings',
		  'Return air ticket',
		  'Clear Passport bio data page',
		  'A clear photograph',
		  'Local ID or Passport for Dual citizens (at point of entry)'
		],
		applicationSteps: [
		  'Click on Create an account',
		  'Click on E-visa Application',
		  'Fill Application form',
		  'Pay Using Visa Card, Mastercard and other debit or credit cards',
		  'Await approval then download and print the eVisa from your eVisa account',
		  'Present your printed eVisa to the immigration officer at the port of entry',
		  'You can always check status of your application online'
		],
		customsAllowances: [
		  '250 grams total of any tobacco products; Restricted to travellers 18 years and over',
		  '1 litre of spirits; or 2 litres of wine; Restricted to travellers 18 years and over',
		  '500mL total of perfume and eau de toilette, of which not more than 125mL may be perfume'
		],
		healthInformation: [
			'Malaria is widespread, except in Nairobi and places higher than 2500 meters above sea level. Consider taking anti-malarial medication. Ensure your accommodation is insect-proof. Use insect repellent.',
			'Yellow Fever is widespread. Get vaccinated before you travel and bring your vaccination certificate with you.',
			'You may be exposed to foodborne, waterborne. Drink only boiled or bottled water. Avoid raw or undercooked food.',
			'It\'s illegal to work or volunteer without a valid work permit. To work in the charity sector, get a valid work permit through the Directorate of Immigration Services.',
			'It\'s illegal to have same-sex relationships.',
			'It\'s illegal to take photos of official buildings, get advice before taking photos. It&#39;s also illegal to destroy the local currency, smoke outside designated areas, possess ivory, and use single-use plastic bags.',
			'Kenya recognizes dual nationality but hasn\'t fully enacted laws around it.',
			'All travellers arriving into the country through any point of entry shall no longer be required to show proof of either Covid-19 vaccination or a pre- departure Covid-19 test.',
			'Any traveler arriving at any port of entry into Kenya with flu-like symptoms will be required to fill the passenger locator form on the \'jitenge\' platform: https://ears.health.go.ke/airline_registration/. They will also require to take a Covid-19 antigen test upon arrival at their own cost. These who turn out positive for antigen test will be required to take a further Covid-19 PCR test at their own cost. Those with severe symptoms shall thereafter be allowed to isolate as per the prevailing isolation requirements for mild, moderate and severe disease.',
			'Passengers traveling out of the country, will be required to abide by the particular travel, health and COVID-19 related requirements of the transit and destination country.',
			'It is illegal to fish in marine parks.',
			'Weather in Kenya is fair though not always warm'
		]
	  };

	const handleChange = (event) => {
		setSelectedCountry(event.target.value);
	};

	const formatTitle = (key) => {
		const spacedText = key.replace(/([A-Z])/g, ' $1').trim();
		return spacedText.replace(/\b\w/g, (c: string) => c.toUpperCase());
	};

	return (
		<Box mt={20}>
		  <Page>
				<VStack spacing={4}>
			  		<Select placeholder="Select your nationality" onChange={handleChange}>
						{Object.keys(visaInfo).map(country => (
				  			<option key={country} value={country}>{country}</option>
						))}
			  		</Select>
			  		{selectedCountry && (
						<Text fontSize="xl">
				 	 		As a {selectedCountry} national, you need to apply for an <b>{visaInfo[selectedCountry]}</b>.
						</Text>)}
					<Text textAlign={'left'} width={'100%'} mt={8}>The best option to use is to travel on a tourist Visa.</Text>
					<Text textAlign={'left'} width={'100%'} mb={6}>Visit Visa is also an option which requires an invitation letter from a family member/ travel agent in Kenya.</Text>
			  			<List spacing={3}>
						{Object.entries(visaDetails).map(([key, values]) => (
				  			<Box key={key} py={4} width="100%" textAlign={'left'}>
								<Heading size='md' mb={4}>{formatTitle(key)}</Heading>
								{values.map((item, index) => (
									<ListItem key={index} display={'flex'} alignItems="start" mb={2} gap={1}>
										<ListIcon as={MdCheckCircle} color="green.500" mt={2}/>
										<Text textAlign={'left'}>{item}</Text>
								  </ListItem>
								))}
				 		</Box>))}
			  	</List>
				</VStack>
		  </Page>
		</Box>
	  );
}

export default VisaInformation;
