import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { faq } from '../data/FAQ';

function FAQ() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				{faq.map((entry, i) => (
					<Box key={i}>
						<Text as={'b'}>
							{entry.question}
						</Text>
						<Text mb={i === faq.length-1 ? 40: 0}>
							{entry.answer1}
						</Text>
						{entry.answer2 && <Text>
							{entry.answer2}
						</Text>}
						{entry.answer3 && <Text>
							{entry.answer3}
						</Text>}
					</Box>
				))}
			</Flex>
		</Box>
	);
}

export default FAQ;
