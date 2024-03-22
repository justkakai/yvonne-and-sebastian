import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';


export const Footer: React.FC<FlexProps> = (props: FlexProps) => {
	const year = new Date().getFullYear();
	return (
		<Flex mt={40} p={4} justifyContent={'center'} gap={2} {...props}>
			<Text fontSize="md" color="gray.500">Made by Kakai with ❤️</Text>
			<Text fontSize="md" color="gray.500">© {year}</Text>
		</Flex>
	);
};
