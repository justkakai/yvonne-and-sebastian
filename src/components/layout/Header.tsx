/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Text,
	Flex,
	HStack,
	Button,
	Link,
	IconButton,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	VStack
} from '@chakra-ui/react';
import { CiMenuFries } from 'react-icons/ci';

export const Header: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Updated styles for glass-like effect
	const glassEffectStyle = {
		bg: 'rgba(209, 188, 183, 0.1)', // Transparent background
		backdropFilter: 'blur(10px)', // Blur effect
		_hover: {
			bg: 'rgba(209, 188, 183, 0.2)',
			backdropFilter: 'blur(10px)'
		}
	};

	const styles = {
		link: {
			color: '#4a4a4a',
			textDecoration: 'none',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 40
		},
		activeLink: {
			color: '#4a4a4a',
			backgroundColor: 'rgba(209, 188, 183, 0.6)',
			textDecoration: 'none',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 40
		}
	};

	const mainRoutes = [
		{ path: '/', name: 'Home' },
		{ path: '/travel', name: 'Travel' },
		{ path: '/what-to-know', name: 'What to know' },
		{ path: '/wedding-info', name: 'Wedding info' },
		{ path: '/our-love-story', name: 'Our love story' },
		{ path: '/contact', name: 'Contact' },
		{ path: '/faq', name: 'FAQ' }
	];

	return (
		<>
			{/* Mobile Menu Icon at the top with glass-like effect */}
			<Flex
				onClick={onOpen}
				cursor={'pointer'}
				display={['flex', null, null, null, 'none']} // Only display in mobile view
				alignItems={'center'}
				justifyContent={'flex-start'}
				width={'fit-content'}
				py={2}
				pr={8}
				pl={4}
				borderRadius={40}
				position="sticky"
				top={4}
				zIndex={2}
				{...glassEffectStyle}
			>
				<IconButton
					icon={<CiMenuFries size={20}/>}
					bg={'transparent'}
					_hover={{ bg: 'transparent' }}
					aria-label="Open Menu"
					boxSize={0}
					marginRight={1}
				/>
				<Text
					fontSize={'md'}
				>MENU</Text>
			</Flex>
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				width={'100%'}
				mt={[8, null, null, 0]}
			>
				<Text
					fontFamily={'heading'}
					fontSize={'5xl'}
					textAlign={'center'}
					cursor={'pointer'}
					mb={[8, null, null, null, 0]}
					onClick={() => window.location.href = '/'}
				>Yvonne & Sebastian</Text>
			</Flex>
			<Flex
				fontFamily={'body'}
				display={['none', null, null, null, 'flex']} // Hide on mobile, show on medium and larger screens
				height={[8, null, null, 28]}
				justifyContent={'center'}
				width={'100%'}
				position={'relative'}
			>
				{/* Drawer and other content follows */}
				<Drawer
					isOpen={isOpen}
					placement='left'
					onClose={onClose}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton color='#907566'/>
						<DrawerBody mt={10} display={'flex'} flexDirection={'column'}>
							<Text
								fontFamily={'heading'}
								fontSize={'3xl'}
								color='#907566'
								pl={6}
							>Yvonne & Sebastian</Text>
							<VStack align="start" p={4}>
								{mainRoutes.map((route, i) => (
									<Link
										as={NavLink}
										key={`main_route_${i}`}
										to={route.path}
										onClick={onClose}
										width={'100%'}
										fontSize={'lg'}
										sx={{
											pt: 2,
											pb: 2,
											pl: 2,
											pr: 10,
											color: '#907566',
											_hover: {
												bg: 'rgba(144, 117, 102, 0.1)',
												color: '#907566',
												borderRadius: 10,
												textDecoration: 'none'
											}
										}}
									>
										{route.name}
									</Link>
								))}
							</VStack>
							<Button
								as="a"
								href='https://docs.google.com/forms/d/e/1FAIpQLSeL1IHRq-kGY34Nt8SXMITSsQEjijph-P7m32TB_76_bh96Rw/viewform?usp=sharing'
								target="_blank"
								variant={'fun'}
								width={48}
								mr={12}
								alignSelf={'center'}
								mt={'auto'}
								color={'#907566'}
								bg={'transparent'}
								borderColor={'#907566'}
								_hover={{ textDecoration: 'none', backgroundColor: 'rgba(209, 188, 183, 0.5)' }}
							>
                                RSVP
							</Button>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<HStack
					color={'backgrounds.100'}
					width={'100%'}
					justifyContent={'center'}
					// gap={4}
					fontSize={'lg'}
					fontWeight={'bold'}
					display={['none', null, null, null, 'flex']} // Hide on mobile, show on medium and larger screens
				>
					{mainRoutes.map((route, i) => (
						<NavLink
							key={`main_route_${i}`}
							to={route.path}
							style={({isActive}) => isActive ? styles.activeLink : styles.link}
						>
							{route.name}
						</NavLink>
					))}
				</HStack>
			</Flex>
		</>
	);
};
