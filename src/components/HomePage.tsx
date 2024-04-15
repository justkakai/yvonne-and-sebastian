import React, { useEffect, useRef } from 'react';
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
import homepageImage from '../images/homepage.jpg';

function DeadlinePopup({ onModalClose }: { onModalClose: () => void }) {

	const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

	useEffect(() => {
		if (!isOpen) {
		  onModalClose();
		}
	  }, [isOpen, onModalClose]);

	return (
		<Box>
			<Modal
				autoFocus={false}
				isOpen={isOpen}
				onClose={onClose}
				blockScrollOnMount={false}
				size={'xl'}
			>
				<ModalOverlay/>
				<ModalContent px={{base: 2, md: 10}} py={10} bg={'modalbg'} width={{base: '90%', md: '100%'}}>
					<ModalHeader textAlign={'center'} mb={8} fontWeight={'normal'} color={'#4a4a4a'} >🪅 Karibuni Sherehe!! 🪅</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex direction={'column'} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
							<Box textAlign={'left'} mb={10}>
								We are so excited to have you!
							</Box>
							<Box textAlign={'left'} mb={10}>
								Thanks in advance for your RSVP. Please do so by
								<Text display={'inline-block'} fontWeight={'bold'} fontSize={'xl'} ml={1}> 12th August 2024</Text>.
							</Box>
							<Box textAlign={'left'} mb={10}>
								We will be adding updates soon to our program, FAQS, registry, and photos.
							</Box>
							<Box textAlign={'left'} mb={10}>
								Please add your email details to get updates.
							</Box>
							<Box textAlign={'left'} mb={1}>
								Cheers,
							</Box>
							<Box textAlign={'left'}>
								Yvonne & Sebastian
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

	const rsvpRef = useRef<HTMLButtonElement>(null);

	const handleModalClose = () => {
		if (rsvpRef.current) {
		  rsvpRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top on page load
		const onBeforeUnload = () => {
			window.scrollTo(0, 0); // Scroll to top on reload
		};
		window.addEventListener('beforeunload', onBeforeUnload);
		return () => window.removeEventListener('beforeunload', onBeforeUnload);
	}, []);

	return (
		<Flex direction={'column'} alignItems={'center'} gap={10}>
			<DeadlinePopup onModalClose={handleModalClose}/>
			<Image src={homepageImage} alt='Yvonne and Sebastian' objectFit={'cover'} boxSize={700} loading='lazy'/>
			<Flex direction={'column'} gap={4} alignItems={'center'}>
				<Text fontFamily={'heading'} fontSize={'3xl'} mb={6}>Friday, October 4th 2024</Text>
				<Text fontFamily={'heading'} fontSize={'2xl'}>Diani Beach, Kenya</Text>
				<Flex gap={1} mb={20}>
					<Text>{days} {days === 1 ? 'day' : 'days'},</Text>
					<Text>{hours} {hours === 1 ? 'hour' : 'hours'} and</Text>
					<Text>{minutes} {minutes === 1 ? 'minute' : 'minutes'}</Text>
				</Flex>
			</Flex>
			<Button variant={'fun'} width={48} ref={rsvpRef}>
				<Link
					href='https://docs.google.com/forms/d/e/1FAIpQLSeL1IHRq-kGY34Nt8SXMITSsQEjijph-P7m32TB_76_bh96Rw/viewform?usp=sharing'
					isExternal
					_hover={{ textDecoration: 'none' }}
				>RSVP</Link>
			</Button>
		</Flex>
	);
};

export default HomePage;
