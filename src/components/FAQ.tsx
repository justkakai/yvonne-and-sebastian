import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { faq } from '../data/FAQ';

function FAQ() {

	const convertEmailToLink = (text: string): React.ReactNode => {
		// Regular expression to match an email address
		const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

		// Replace email addresses with clickable links
		const result = text.replace(emailRegex, (match) => `<a href="mailto:${match}">${match}</a>`);

		// Use dangerouslySetInnerHTML to render the HTML content
		// eslint-disable-next-line @typescript-eslint/naming-convention
		return <span dangerouslySetInnerHTML={{ __html: result }} />;
	};

	return (
		<Box mt={20}>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				{faq.map((entry, i) => (
					<Box key={i}>
						<Text as={'b'}>
							{convertEmailToLink(entry.question)}
						</Text>
						<Text mb={i === faq.length-1 ? 40: 0}>
							{convertEmailToLink(entry.answer1)}
						</Text>
						{entry.answer2 && <Text>
							{convertEmailToLink(entry.answer2)}
						</Text>}
						{entry.answer3 && <Text>
							{convertEmailToLink(entry.answer3)}
						</Text>}
					</Box>
				))}
			</Flex>
		</Box>
	);
}

export default FAQ;
