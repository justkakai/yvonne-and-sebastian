import React, { useState, useEffect } from 'react';
import './styles/globals.css';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import theme from './styles/theme';
import { Router } from './components/router/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
// import officialBgImage from './images/official-background-image-compressed.jpg';
import officialBgImage from './images/official-background-image-5.jpeg';

export const App: React.FC = () => {
	const [bgImageLoaded, setBgImageLoaded] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;
			if (isLargeScreen && !bgImageLoaded) {
				const img = new Image();
				img.src = officialBgImage;
				img.onload = () => setBgImageLoaded(true);
			}
		};

		handleResize(); // Check the screen size on initial load
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [bgImageLoaded]);

	return (
		<ChakraProvider theme={theme}>
			<Flex
				justifyContent={'center'}
				bg={'white'}
				style={{
					backgroundImage: bgImageLoaded ? `url(${officialBgImage})` : 'none',
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover'
				}}
			>
				<Flex
					width={{ base: '100%', md: '80%' }}
					pt={[4, null, null, 20]}
					bg={['backgrounds.100', null, null, 'rgba(255, 255, 255, 0.2)']}
					boxShadow={['none', null, null, 'lg']}
					justifyContent={'center'}
				>
					<Box width={'100%'} px={10}>
						<Header />
						<Router />
						<Footer />
					</Box>
				</Flex>
			</Flex>
		</ChakraProvider>
	);
};
