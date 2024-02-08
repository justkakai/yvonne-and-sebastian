import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

function WeddingParty() {

	return (
		<Box height={'100vh'}>
			<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Box textAlign={'center'}>
            		Wedding Party
				</Box>
			</Flex>
		</Box>
	);
}

export default WeddingParty;
