/* eslint-disable max-len */
import React from 'react';
import { Box, Text, Flex, Image, Heading } from '@chakra-ui/react';

import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaPaypal } from 'react-icons/fa';
import { SiZelle, SiCashapp } from 'react-icons/si';
import { MdMobileScreenShare } from 'react-icons/md';
import { IoLogoVenmo } from 'react-icons/io5';

import cashapp from '../images/Cashapp.jpg';
import venmo from '../images/Venmo.jpg';
import Page from './layout/Page';

function Registry() {
	const paymentMethods = [
		{
			icon: FaMoneyBillTransfer,
			color: '#FDBB23',
			title: 'Bank Transfer',
			details: [
				'Yvonne Ndinda Mutua',
				'Bank: N26',
				'Account number / IBAN: DE07 1001 1001 2622 6816 14',
				'BIC: NTSBDEB1XXX'
			]
		},
		{
			icon: SiZelle,
			color: '#6C1CD3',
			title: 'Zelle',
			details: [
				'Email: yvonnendindam@gmail.com'
			]
		},
		{
			icon: FaPaypal,
			color: '#0175BA',
			title: 'PayPal',
			details: [
				'Email: bakulube@yahoo.co.uk',
				'Username: YMutua',
				'Please send as Friends and Family option when sending to reduce extra charges.'
			]
		},
		{
			icon: MdMobileScreenShare,
			color: '#38AF48',
			title: 'MPESA',
			details: [
				'Cynthia Kibwage: 0712422964'
			]
		},
		{
			icon: SiCashapp,
			color: '#03CF32',
			title: 'Cash App',
			image: cashapp,
			alt: 'CashApp QR Code'
		},
		{
			icon: IoLogoVenmo,
			color: '#0084F7',
			title: 'Venmo',
			image: venmo,
			alt: 'Venmo QR Code'
		}
	];

	return (
		<Box mt={12}>
			<Page>
				<Box textAlign={'left'}>
					<Text mb={8}>Dear Friends and Family,</Text>
					<Text mb={8}>As our wedding day nears, your presence is present enough, but should you wish to bring a gift to our wedding, we are accepting only a cash gift.</Text>
					<Text mb={2}>With love,</Text>
					<Text mb={16}>Yvonne & Sebastian</Text>
					{paymentMethods.map((method, index) => (
						<Box key={index} mb={12}>
							<Flex mt={8} mb={4} gap={3} alignItems={'center'}>
								<method.icon color={method.color} />
								<Heading size='md'>{method.title}</Heading>
							</Flex>
							{method.details?.map((detail, i) => (
								<Text key={i}>{detail}</Text>
							))}
							{method.image && (
								<Image
									src={method.image}
									alt={method.alt}
									objectFit={'contain'}
									boxSize={300}
									loading='lazy'
								/>
							)}
						</Box>
					))}
				</Box>
			</Page>
		</Box>
	);
}

export default Registry;
