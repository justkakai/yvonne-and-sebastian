import React from 'react';
import './styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Text, Box, Flex } from '@chakra-ui/react';

import theme from './styles/theme';
import { Router } from './components/router/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Flex
			justifyContent={'center'}
			bg={'white'}
			style={{
				// eslint-disable-next-line max-len
				backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/052/125/original/abstract-teal-brushstroke-texture-vector.jpg)',
				backgroundAttachment: 'fixed'
			}}
		>
			<Flex
				width={'80%'}
				pt={20}
				bg={'white'}
				justifyContent={'center'}
				// boxShadow={'5px 5px 15px #e3e3e3, -5px -5px 15px #e3e3e3'}
				// boxShadow={'5px 5px 15px #333, -5px -5px 15px #333'}
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
