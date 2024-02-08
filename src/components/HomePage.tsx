import React from 'react';
import {
	Image,
	Box,
	Flex,
	Text,
	Button,
	Link,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure } from '@chakra-ui/react';
import image from '../images/homepage.jpg';

function DeadlinePopup() {

	const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} size={'3xl'}>
				<ModalOverlay/>
				<ModalContent p={10}>
					<ModalHeader textAlign={'center'} mb={8} fontWeight={'normal'} color={'#4a4a4a'} >Karibuni Sherehe!!</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
							<Box textAlign={'left'}>
								We are so excited to have you!
							</Box>
							<Box textAlign={'left'}>
								Thanks in advance for your RSVP, please do so by 12th August 2024.
							</Box>
							<Box textAlign={'left'}>
								We will be adding updates soon to our schedule, FAQS, registry, and photos.
							</Box>
							<Box textAlign={'left'}>
								Please add your email details to get updates.
							</Box>
							<Box textAlign={'left'}>
								Cheers, Yvonne & Sebastian
							</Box>
						</Flex>
					</ModalBody>
					<ModalFooter>
						<Button variant={'fun'} onClick={onClose}>Continue</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}


const HomePage = () => {

	const difference = new Date('10/04/2024').getTime() - new Date().getTime();
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

	return (
		<Flex direction={'column'} alignItems={'center'} gap={10}>
			<DeadlinePopup />
			<Image src={image} alt='Dan Abramov' objectFit={'cover'} boxSize={700} loading='lazy'/>
			<Flex direction={'column'} gap={4} alignItems={'center'}>
				<Text fontFamily={'heading'} fontSize={'3xl'} mb={6}>Friday, October 4th 2024</Text>
				<Text fontFamily={'heading'} fontSize={'2xl'}>Diani Beach, Kenya</Text>
				<Flex gap={3} mb={20}>
					<Text>{days} {days === 1 ? 'DAY' : 'DAYS'}</Text>
					<Text>{hours} {hours === 1 ? 'HOUR' : 'HOURS'}</Text>
					<Text>{minutes} {minutes === 1 ? 'MINUTE' : 'MINUTES'}</Text>
				</Flex>
				<Button variant={'fun'}>
					<Link
						href='https://docs.google.com/forms/d/e/1FAIpQLSeL1IHRq-kGY34Nt8SXMITSsQEjijph-P7m32TB_76_bh96Rw/viewform?usp=sharing'
						isExternal
						>RSVP</Link></Button>
			</Flex>
		</Flex>
	);
};

export default HomePage;
