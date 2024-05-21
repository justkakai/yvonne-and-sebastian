import React from 'react';
import { Flex, Wrap } from '@chakra-ui/react';

interface HeaderPageProps {
	children: React.ReactNode;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ children }) => (
	<Flex
		direction="column"
		display={['none', 'none', 'flex']}
		px={[0, 4, 16, 24, 60]}
		lineHeight={8}
		fontSize="lg"
		justifyContent="center"
		mb={20}
	>
		<Wrap
			color="backgrounds.100"
			fontSize="lg"
			fontWeight="bold"
			justify={['space-between', 'center']}
			width="100%"
		>
			{children}
		</Wrap>
	</Flex>
);

export default HeaderPage;
