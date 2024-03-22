import React from 'react';
import './styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Text, Box, Flex } from '@chakra-ui/react';

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
				width={'80%'}
				pt={20}
				bg={'rgba(255, 255, 255, 0.9)'}
				justifyContent={'center'}
			>
				<Box width={'80%'} px={10}>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						width={'100%'}
					>
						<Text
							fontFamily={'heading'}
							fontSize={'6xl'}
							color={'#4a4a4a'}
						>Yvonne & Sebastian</Text>
					</Flex>
					<Header/>
					<Router/>
					<Footer />
				</Box>
			</Flex>
		</Flex>
	</ChakraProvider>
);
