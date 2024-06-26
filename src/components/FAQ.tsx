import React, { useState } from 'react';
import { Box, Text, Button, Tooltip } from '@chakra-ui/react';
import { faq } from '../data/FAQ';
import Page from './layout/Page';

function FAQ() {
	// This state will keep track of which email's tooltip is currently visible
	const [tooltipEmail, setTooltipEmail] = useState('');

	const handleCopy = (email) => {
		navigator.clipboard.writeText(email).then(() => {
			setTooltipEmail(email); // Show tooltip for the copied email
			setTimeout(() => setTooltipEmail(''), 2000); // Hide tooltip after 2 seconds
		}, (err) => {
			console.error('Could not copy text: ', err);
		});
	};

	const copyEmailFunctionality = (text: string): React.ReactNode => {
		const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
		const parts = text.split(emailRegex);
		const emails = text.match(emailRegex) || []; // Avoid null by providing a fallback empty array

		return (
			<>
				{parts.map((part, i) => (
					<React.Fragment key={i}>
						{part}
						{i < emails.length && (
							<Tooltip
								bg={'black'}
								color={'white'}
								label="Copied to clipboard!"
								isOpen={tooltipEmail === emails[i]} placement="top">
								<Button
									onClick={() => handleCopy(emails[i])}
									bg={'white'}
									border={'1px solid #ebeae8'}
									my={1}
									mr={1}
									_hover={{ bg: '#f9f9f9' }}
								>
									{emails[i]}
								</Button>
							</Tooltip>
						)}
					</React.Fragment>
				))}
			</>
		);
	};

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const createMarkup = (html) => ({ __html: html });

	return (
		<Box mt={[0, null, 12]}>
			<Page heading='FAQ'>
				{faq.map((entry, i) => (
					<Box key={i}>
						<Text as={'b'} display='inline-block' mb={2}>
							{copyEmailFunctionality(entry.question)}
						</Text>
						<Text mb={i === faq.length - 1 ? 40 : 3} dangerouslySetInnerHTML={createMarkup(entry.answer1)} />
						{entry.answer2 && <Text dangerouslySetInnerHTML={createMarkup(entry.answer2)} />}
						{entry.answer3 && <Text dangerouslySetInnerHTML={createMarkup(entry.answer3)} />}
					</Box>
				))}
			</Page>
		</Box>
	);
}

export default FAQ;
