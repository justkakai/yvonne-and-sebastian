import React from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

function DressCode() {

	return (
		<Box height={'100vh'}>
			<Flex direction={'column'} gap={3} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Grid templateColumns='repeat(5, 1fr)' gap={3}>
					<GridItem w='100%' h='20' bg='#5FA9B6' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#25C3CB' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#80D1D5' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#76D5CA' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#95D0CD' cursor='pointer' />
				</Grid>
				<Grid templateColumns='repeat(5, 1fr)' gap={3}>
					<GridItem w='100%' h='20' bg='#016D91' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#249282' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#02A1B0' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#007C73' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#007C73' cursor='pointer' />
				</Grid>
				<Grid templateColumns='repeat(5, 1fr)' gap={3}>
					<GridItem w='100%' h='20' bg='#007CC2' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#008F7D' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#0A96B2' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#3EB9A4' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#597980' cursor='pointer' />
				</Grid>
				<Grid templateColumns='repeat(5, 1fr)' gap={3}>
					<GridItem w='100%' h='20' bg='#02BEAA' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#0090A3' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#008391' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#125861' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#A9D7D7' cursor='pointer' />
				</Grid>
				<Grid templateColumns='repeat(5, 1fr)' gap={3}>
					<GridItem w='100%' h='20' bg='#00556A' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#99C6C0' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#6BD1CC' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#02A6B2' cursor='pointer' />
					<GridItem w='100%' h='20' bg='#006762' cursor='pointer' />
				</Grid>
			</Flex>
		</Box>
	);
}

export default DressCode;
