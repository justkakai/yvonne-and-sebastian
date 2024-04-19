import React from 'react';
import { Flex } from '@chakra-ui/react';

interface PageProps {
	children: React.ReactNode;
	gap?: number;
}

const Page: React.FC<PageProps> = ({ children, gap }) => (
	<Flex
		direction='column'
		gap={gap ?? 10}
		px={[0, 4, 16, 24, 60]}
		lineHeight={8}
		fontSize='lg'
	>
		{children}
	</Flex>
);

export default Page;
