/* eslint-disable max-len */
import React, { useState } from 'react';
import { Box, Text, Flex, Image, Button, Tooltip } from '@chakra-ui/react';

import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaPaypal } from 'react-icons/fa';
import { /* SiZelle, */ SiCashapp } from 'react-icons/si';
import { MdMobileScreenShare } from 'react-icons/md';
import { IoLogoVenmo } from 'react-icons/io5';

import cashapp from '../images/Cashapp.jpg';
import venmo from '../images/Venmo.jpg';
import Page from './layout/Page';

function Registry() {
	const [tooltipText, setTooltipText] = useState('');

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text).then(() => {
			setTooltipText(text);
			setTimeout(() => setTooltipText(''), 2000);
		}, (err) => {
			console.error('Could not copy text: ', err);
		});
	};

	const parseCopyText = (text) => {
		const regex = /\(copy\)(.*?)\(copy\)/g;
		const parts = text.split(regex);
		return parts.map((part, index) => (
			index % 2 === 1 ? (
				<Tooltip
					key={index}
					bg={'black'}
					color={'white'}
					label="Copied to clipboard!"
					isOpen={tooltipText === part}
					placement="top"
				>
					<Button
						onClick={() => handleCopy(part)}
						bg={'transparent'}
						fontWeight={'normal'}
						border={'1px solid #ebeae8'}
						color={'brand.500'}
						my={1}
						mr={1}
						_hover={{
							bg: '#f1ebea',
							border: '1px solid #f1ebea'
						}}
					>
						{part}
					</Button>
				</Tooltip>
			) : (
				<React.Fragment key={index}>{part}</React.Fragment>
			)
		));
	};

	const paymentMethods = [
		{
			icon: FaMoneyBillTransfer,
			color: '#FDBB23',
			title: 'Bank Transfer',
			details1: [
				{
					label: 'Account holder',
					value: '(copy)Yvonne Ndinda Mutua(copy)'
				},
				{
					label: 'Bank',
					value: '(copy)N26(copy)'
				},
				{
					label: 'Account number / IBAN',
					value: '(copy)DE07 1001 1001 2622 6816 14(copy)'
				},
				{
					label: 'BIC',
					value: '(copy)NTSBDEB1XXX(copy)'
				}
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
				{
					label: 'Email',
					value: '(copy)bakulube@yahoo.co.uk(copy)'
				},
				{
					label: 'Username',
					value: '(copy)YMutua(copy)'
				}
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
				{
					label: 'Yvonne Ndinda Mutua',
					value: '(copy)0702042034(copy)'
				}
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
								<Flex key={i} direction={['column', 'row']} alignItems={['start', 'center']} mb={2}>
									<Text mr={2}>
										{detail.label} :
									</Text>
									<Text>{parseCopyText(detail.value)}</Text>
								</Flex>
							))}
							{method.details2?.map((detail, i) => (
								<Text key={i} mt={4}>
									{parseCopyText(detail)}
								</Text>
							))}
							{method.image && (
								<Image
									src={method.image}
									alt={method.alt}
									objectFit={'contain'}
									boxSize={300}
									loading="lazy"
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
