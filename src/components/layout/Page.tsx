import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';

interface PageProps {
	children: React.ReactNode;
	gap?: number;
	fontsize?: string;
	heading?: string | undefined;
}

const Page: React.FC<PageProps> = ({ children, gap, fontsize, heading }) => (
	<Flex
		direction="column"
		gap={gap ?? 10}
		px={[0, 4, 16, 24, 60]}
		lineHeight={9}
		fontSize={fontsize ?? 'lg'}
	>
		{heading && (
			<Heading
				size="md"
				pt={6}
				pb={2}
				fontFamily={'body'}
				textAlign="center"
				display={['inline-block', null, 'none']}
			>
				<Flex alignItems={'center'}>
					<IoIosArrowForward />{heading}
				</Flex>
			</Heading>
		)}
		{children}
	</Flex>
);

export default Page;
