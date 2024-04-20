/* eslint-disable max-len */
import React from 'react';
import {
	Flex,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Link
} from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';

export const Footer: React.FC<FlexProps> = (props: FlexProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const year = new Date().getFullYear();

	return (
		<Flex mt={40} p={4} justifyContent={'center'} gap={2} {...props}>
			<Text fontSize="md" color="gray.500">Made by <Link color="green.500" onClick={onOpen}>Kakai</Link> with ❤️ <Text fontSize="md" color="gray.500" display={'inline'}>© {year}</Text></Text>
			<Modal
				autoFocus={false}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent
					pt={8}
					pl={8}
					width={{base: '90%', md: '100%'}}
				>
					<ModalHeader pr={{base: 8, md: 16}}>
						<Text>Hey, i&apos;m Kakai & I do frontend stuff 🎨</Text>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody pr={{base: 8, md: 16}}>
						<Text>Feel free to connect with me on <Link href="https://www.linkedin.com/in/wapenyik/" isExternal color='green'>LinkedIn</Link> or reach out to me on <Text as={'b'}>wapenyik@outlook.com</Text> for business-related enquiries.</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							variant={'fun'}
							fontWeight={'bold'}
							onClick={onClose}
						>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};
