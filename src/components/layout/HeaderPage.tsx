import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';

interface HeaderPageProps {
	children: React.ReactNode;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ children }) => (
	<Flex
		direction="column"
		display={['none', null, null, null, 'flex']}
		lineHeight={8}
		fontSize="lg"
		mb={20}
		width={'100%'}
	>
		<HStack
			color="backgrounds.100"
			fontSize="lg"
			fontWeight="bold"
			justifyContent={'center'}
			width="100%"
		>
			{children}
		</HStack>
	</Flex>
);

export default HeaderPage;
