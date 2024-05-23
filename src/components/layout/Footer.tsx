/* eslint-disable max-len */
import React from 'react';
import {
	Flex,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Link
} from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';

export const Footer: React.FC<FlexProps> = (props: FlexProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const year = new Date().getFullYear();

	return (
		<Flex mt={40} p={4} justifyContent={'center'} gap={2} {...props}>
			<Text fontSize="md" color="gray.600">Made by <Link color="rgb(137, 97, 86)" onClick={onOpen}>Kakai</Link> with ❤️ <Text fontSize="md" color="gray.600" display={'inline'}>© {year}</Text></Text>
			<Modal
				autoFocus={false}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent
					pt={8}
					pb={10}
					pl={8}
					width={{base: '90%', md: '100%'}}
					bg={['backgrounds.100', null, null, null, 'backgrounds.200']}
				>
					<ModalHeader pr={{base: 8, md: 16}}>
						<Text>Hey! I&apos;m Kakai & I do frontend stuff 🎨</Text>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody pr={{base: 8, md: 16}}>
						<Text>Feel free to connect with me on <Link href="https://www.linkedin.com/in/wapenyik/" isExternal color='teal.600'>LinkedIn</Link> or reach out to me on <Text as={'b'}>wapenyik@outlook.com</Text> for business-related enquiries.</Text>
					</ModalBody>
					{/* <ModalFooter>
						<Button
							variant={'fun'}
							onClick={onClose}
							fontWeight={'normal'}
							border={'1px solid'}
						>Close</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</Flex>
	);
};
