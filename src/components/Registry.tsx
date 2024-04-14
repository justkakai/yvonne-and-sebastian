/* eslint-disable max-len */
import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import cashapp from '../images/Cashapp.jpg';
import venmo from '../images/Venmo.jpg';

function Registry() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Box textAlign={'left'}>
            		<Text mb={2}>Dear Friends and Family,</Text>
					<Text mb={2}>As our wedding day nears, your presence is present enough, but should you wish to bring a gift to our wedding, we are accepting only a cash gift.</Text>
					<Text mb={2}>With love,</Text>
					<Text>Yvonne & Sebastian</Text>
					<Text fontWeight={'bold'} mt={8} mb={8}>Bank Transfer</Text>
					<Text>Yvonne Ndinda Mutua</Text>
					<Text>Bank: N26</Text>
					<Text>Account number / IBAN: DE07 1001 1001 2622 6816 14</Text>
					<Text>BIC: NTSBDEB1XXX</Text>
					<Text fontWeight={'bold'} mt={8} mb={8}>Zelle</Text>
					<Text>Email: yvonnendindam@gmail.com</Text>
					<Text fontWeight={'bold'} mt={8} mb={8}>Paypal</Text>
					<Text>Email: bakulube@yahoo.co.uk</Text>
					<Text>Username: YMutua</Text>
					<Text display={'inline-block'}>Please send as <Text display={'inline-block'} fontWeight={'bold'}>Friends and Family</Text> option when sending to reduce extra charges.</Text>
					<Text fontWeight={'bold'} mt={8} mb={8}>MPESA</Text>
					<Text>Cynthia Kibwage: 0712422964</Text>
					<Text fontWeight={'bold'} mt={8} mb={8}>Cash App & Venmo</Text>
					<Flex gap={8} direction={['column', null, null, 'row']}>
						<Image
							src={cashapp}
							alt='CashApp QR Code'
							objectFit={'contain'}
							boxSize={300}
							loading='lazy'
						/>
						<Image
							src={venmo}
							alt='Venmo QR Code'
							objectFit={'contain'}
							boxSize={300}
							loading='lazy'
						/>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}

export default Registry;
