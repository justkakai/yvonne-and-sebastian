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
import { IoIosMenu } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';


export const Header: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Updated styles for glass-like effect
	const glassEffectStyle = {
		bg: 'rgba(209, 188, 183, 0.3)', // Transparent background
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
			fontWeight: 'normal',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 4
		},
		activeLink: {
			color: '#4a4a4a',
			backgroundColor: 'rgba(209, 188, 183, 0.6)',
			textDecoration: 'none',
			fontWeight: 'normal',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 4
		}
	};

	const mainRoutes = [
		{ path: '/', name: 'Home', subRoutes: [] },
		{ path: '/travel', name: 'Travel', subRoutes: [
		  	{ path: '/travel/transport', name: 'Transport' },
		  	{ path: '/travel/accommodation', name: 'Accommodation' },
		  	{ path: '/travel/visa-info', name: 'Visa info' }
		]},
		{ path: '/what-to-know', name: 'What to know', subRoutes: [] },
		{ path: '/wedding-info', name: 'Wedding info', subRoutes: [
		  	{ path: '/wedding-info/program', name: 'Program' },
		  	{ path: '/wedding-info/dress-code', name: 'Dress code' },
		  	{ path: '/wedding-info/registry', name: 'Registry' },
		  	{ path: '/wedding-info/wedding-party', name: 'Wedding party' }
		]},
		{ path: '/our-love-story', name: 'Our love story', subRoutes: [] },
		{ path: '/contact', name: 'Contact', subRoutes: [] },
		{ path: '/faq', name: 'FAQ', subRoutes: [] }
	];

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: typeof mainRoutes[number]) => {
		if (route.subRoutes.length > 0) {
			e.preventDefault(); // Prevent the link from navigating
		} else {
			onClose(); // Close the menu if it's a valid navigation
		}
	};

	return (
		<>
			{/* Mobile Menu Icon at the top with glass-like effect */}
			<Flex
				onClick={onOpen}
				cursor={'pointer'}
				display={['flex', null, null, null, 'none']} // Only display in mobile view
				alignItems={'center'}
				justifyContent={'center'}
				width={'fit-content'}
				py={2}
				pr={4}
				pl={4}
				borderRadius={40}
				position="sticky"
				top={4}
				zIndex={2}
				height={12}
				{...glassEffectStyle}
			>
				<IconButton
					icon={<IoIosMenu size={20} color='grey'/>}
					bg={'transparent'}
					_hover={{ bg: 'transparent' }}
					aria-label="Open Menu"
					boxSize={0}
					marginRight={1}
				/>
				{/* <Text
					fontSize={'lg'} fontWeight={'bold'}
				>MENU</Text> */}
			</Flex>
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				width={'100%'}
				mt={[8, null, null, 0]}
			>
				<Text
					fontFamily={'heading'}
					fontSize={['3xl', null, null, '4xl']}
					textAlign={'center'}
					cursor={'pointer'}
					mb={[6, null, null, null, 0]}
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
					autoFocus={false}
				>
					<DrawerOverlay />
					<DrawerContent bg={'backgrounds.100'}>
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
									<>
										<Link
											as={NavLink}
											key={`main_route_${i}`}
											to={route.subRoutes.length === 0 ? route.path : '#'}
											onClick={(e) => handleLinkClick(e, route)}
											width={'100%'}
											fontSize={'lg'}
											sx={route.subRoutes.length === 0 ?
												{
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
												}
												:
												{
													pt: 2,
													pb: 2,
													pl: 2,
													pr: 10,
													color: '#907566',
													_hover: {
														textDecoration: 'none'
													}
												}}
										>
											{route.name}
										</Link>
										{route.subRoutes.length > 0 && route.subRoutes.map((subRoute) => (
											<Link
												as={NavLink}
												key={subRoute.path}
												to={subRoute.path}
												onClick={onClose}
												width={'100%'}
												fontSize={'lg'}
												sx={{
													pt: 2,
													pb: 2,
													pl: 8,
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
												<Flex gap={2}>
													<IoIosArrowForward /> {subRoute.name}
												</Flex>
											</Link>
										))}
									</>
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
								borderColor={'#907566'}
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
