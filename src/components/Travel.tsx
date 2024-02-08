import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TravelHeader } from './layout/TravelHeader';
import Accommodation from './Accommodation';
import Transport from './Transport';

function Travel() {

	return (
		<Box textAlign={'center'}>
			<TravelHeader />
			<Routes>
				<Route path="transport" element={<Transport />} />
				<Route path="accommodation" element={<Accommodation />} />
				<Route index element={<Navigate to='transport' />}></Route>
			</Routes>
		</Box>
	);
}

export default Travel;
