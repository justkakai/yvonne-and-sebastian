/* eslint-disable max-len */
import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaPaypal } from 'react-icons/fa';
import { /* SiZelle,  */SiCashapp } from 'react-icons/si';
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
			details1: [
				'Account holder : Yvonne Ndinda Mutua',
				'Bank : N26',
				'Account number / IBAN : (copy)DE07 1001 1001 2622 6816 14(copy)',
				'BIC : (copy)NTSBDEB1XXX(copy)'
			]
		},
		/* {
			icon: SiZelle,
			color: '#6C1CD3',
			title: 'Zelle',
			details: [
				'Email: yvonnendindam@gmail.com'
			]
		}, */
		{
			icon: FaPaypal,
			color: '#0175BA',
			title: 'PayPal',
			details1: [
				'Email : (copy)bakulube@yahoo.co.uk(copy)',
				'Username : (copy)YMutua(copy)'
			],
			details2: [
				'Please go for the Friends and Family option when sending to reduce extra charges.'
			]
		},
		{
			icon: MdMobileScreenShare,
			color: '#38AF48',
			title: 'MPESA',
			details1: [
				'Yvonne Ndinda Mutua : (copy)0702042034(copy)'
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
		<Box mt={[0, null, 12]}>
			<Page heading='Registry'>
				<Box textAlign={'left'}>
					<Text mb={8}>Dear Friends and Family,</Text>
					<Text mb={8}>As our wedding day nears, your presence is present enough, but should you wish to bring a gift to our wedding, we are accepting only a cash gift.</Text>
					<Text mb={2}>With love,</Text>
					<Text mb={10}>Yvonne & Sebastian</Text>
					{paymentMethods.map((method, index) => (
						<Box key={index} mb={10}>
							<Flex mt={8} mb={3} gap={3} alignItems={'center'}>
								<method.icon color={method.color} />
								<Text as={'b'}>{method.title}</Text>
							</Flex>
							{method.details1?.map((detail, i) => (
								<Text key={i}>{detail}</Text>
							))}
							{method.details2?.map((detail, i) => (
								<Text key={i} mt={4}>{detail}</Text>
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
