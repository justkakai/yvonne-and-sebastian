import React from 'react';
import './styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';

import theme from './styles/theme';
import { Router } from './components/router/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import officialBgImage from './images/official-background-image.jpg';

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Flex
			justifyContent={'center'}
			bg={'white'}
			style={{
				backgroundImage: `url(${officialBgImage})`,
				backgroundAttachment: 'fixed',
				backgroundSize: 'cover'
			}}
		>
			<Flex
				width={{ base: '100%', md: '80%' }}
				pt={[4, null, null, 20]}
				bg={['rgb(255, 255, 255)', null, null, 'rgba(255, 255, 255, 0.9)']}
				justifyContent={'center'}
			>
				<Box width={{base: '100%', md: '80&'}} px={10}>
					<Header/>
					<Router/>
					<Footer />
				</Box>
			</Flex>
		</Flex>
	</ChakraProvider>
);
