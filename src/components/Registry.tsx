/* eslint-disable max-len */
import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaPaypal } from 'react-icons/fa';
import { SiZelle, SiCashapp } from 'react-icons/si';
import { MdMobileScreenShare } from 'react-icons/md';
import { IoLogoVenmo } from 'react-icons/io5';

import cashapp from '../images/Cashapp.jpg';
import venmo from '../images/Venmo.jpg';

function Registry() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Box textAlign={'left'}>
            		<Text mb={8}>Dear Friends and Family,</Text>
					<Text mb={8}>As our wedding day nears, your presence is present enough, but should you wish to bring a gift to our wedding, we are accepting only a cash gift.</Text>
					<Text mb={2}>With love,</Text>
					<Text>Yvonne & Sebastian</Text>
					<Flex mt={16} mb={8} gap={2} alignItems={'center'}>
						<FaMoneyBillTransfer color='#FDBB23'/>
						<Text fontWeight={'bold'}>Bank Transfer</Text>
					</Flex>
					<Text>Yvonne Ndinda Mutua</Text>
					<Text>Bank: N26</Text>
					<Text>Account number / IBAN: DE07 1001 1001 2622 6816 14</Text>
					<Text>BIC: NTSBDEB1XXX</Text>
					<Flex mt={8} mb={8} gap={2} alignItems={'center'}>
						<SiZelle color='#6C1CD3'/>
						<Text fontWeight={'bold'}>Zelle</Text>
					</Flex>
					<Text>Email: yvonnendindam@gmail.com</Text>
					<Flex mt={8} mb={8} gap={2} alignItems={'center'}>
						<FaPaypal color='#0175BA'/>
						<Text fontWeight={'bold'}>PayPal</Text>
					</Flex>
					<Text>Email: bakulube@yahoo.co.uk</Text>
					<Text>Username: YMutua</Text>
					<Text display={'inline-block'}>Please send as <Text display={'inline-block'} fontWeight={'bold'}>Friends and Family</Text> option when sending to reduce extra charges.</Text>
					<Flex mt={8} mb={8} gap={2} alignItems={'center'}>
						<MdMobileScreenShare color='#38AF48'/>
						<Text fontWeight={'bold'}>MPESA</Text>
					</Flex>
					<Text>Cynthia Kibwage: 0712422964</Text>
					<Flex mt={8} mb={8} gap={2} alignItems={'center'}>
						<SiCashapp color='#03CF32'/>
						<Text fontWeight={'bold'}>Cash App</Text>
					</Flex>
					<Image
						src={cashapp}
						alt='CashApp QR Code'
						objectFit={'contain'}
						boxSize={300}
						loading='lazy'
					/>
					<Flex mt={8} mb={8} gap={2} alignItems={'center'}>
						<IoLogoVenmo color='#0084F7'/>
						<Text fontWeight={'bold'}>Venmo</Text>
					</Flex>
					<Image
						src={venmo}
						alt='Venmo QR Code'
						objectFit={'contain'}
						boxSize={300}
						loading='lazy'
					/>
				</Box>
			</Flex>
		</Box>
	);
}

export default Registry;
