
import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

function WhatToKnow() {

	return (
		<Box height={'100vh'} mt={20} px={[0, 4, 16, 24, 40]}>
			<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Box textAlign={'left'}>
				People from African countries can travel visa-free to Kenya
				</Box>
				<Box textAlign={'left'}>
				People from outside Africa have to apply online for the E-Visa. It is a quick and easy process to apply <Link
						href='https://evisa.go.ke/'
						isExternal
						color={'brown'}>here</Link>
				</Box>
			</Flex>
		</Box>
	);
}

export default WhatToKnow;
