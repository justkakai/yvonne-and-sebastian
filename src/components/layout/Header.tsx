/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Text,
	Flex,
	HStack,
	Link,
	Button,
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

	const styles = {
		link: {
			color: '#4a4a4a',
			textDecoration: 'none',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10
		},
		activeLink: {
			color: '#4a4a4a',
			backgroundColor: 'rgba(209, 188, 183, 0.2)',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 10,
			textDecoration: 'none'
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
			{/* Mobile Menu Icon at the top */}
			<Flex
				display={['flex', null, null, 'none']} // Only display in mobile view
				alignItems={'center'}
				justifyContent={'flex-start'}
				width={'100%'}
				py={2}
				pr={2}
				pl={0}
				position="relative"
				zIndex={2} // Ensures it is above other content
			>
				<IconButton
					icon={<CiMenuFries size={28}/>}
					bg={'transparent'}
					_hover={{ bg: 'transparent' }}
					color={'#4a4a4a'}
					aria-label="Open Menu"
					boxSize={0}
					onClick={onOpen}
					marginRight={2}
				/>
				<Text cursor={'pointer'} onClick={onOpen} fontSize={'lg'} color={'#4a4a4a'}>Menu</Text>
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
					color={'#4a4a4a'}
					textAlign={'center'}
				>Yvonne & Sebastian</Text>
			</Flex>
			<Flex
				fontFamily={'body'}
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
							<Button variant={'fun'} width={48} mr={12} alignSelf={'center'} mt={'auto'} color={'#907566'} bg={'transparent'} borderColor={'#907566'}>
								<Link
									href='https://docs.google.com/forms/d/e/1FAIpQLSeL1IHRq-kGY34Nt8SXMITSsQEjijph-P7m32TB_76_bh96Rw/viewform?usp=sharing'
									isExternal
									_hover={{ textDecoration: 'none' }}
								>RSVP</Link>
							</Button>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<HStack
					color={'backgrounds.100'}
					width={'100%'}
					justifyContent={'center'}
					gap={4}
					fontSize={'lg'}
					// fontWeight={'bold'}
					display={['none', null, null, 'flex']} // Hide on mobile, show on medium and larger screens
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
