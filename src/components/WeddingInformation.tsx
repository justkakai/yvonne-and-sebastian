import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InfoHeader } from './layout/InfoHeader';
import Schedule from './Schedule';
import DressCode from './DressCode';
import Registry from './Registry';
import WeddingParty from './WeddingParty';

function WeddingInformation() {

	return (
		<Box textAlign={'center'}>
			<InfoHeader />
			<Routes>
				<Route path="schedule" element={<Schedule />} />
				<Route path="dress-code" element={<DressCode />} />
				<Route path="registry" element={<Registry />} />
				<Route path="wedding-party" element={<WeddingParty />} />
				<Route index element={<Navigate to='schedule' />}></Route>
			</Routes>
		</Box>
	);
}

export default WeddingInformation;
