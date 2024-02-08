import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';

// import '@/util/i18n';
// import './styles/index.css';
import { App } from './App';


import theme from './styles/theme';


const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<BrowserRouter>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</BrowserRouter>
	);
}
