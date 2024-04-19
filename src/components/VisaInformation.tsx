
import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import Page from './layout/Page';

function VisaInformation() {

	return (
		<Box height={'100vh'} mt={20}>
			<Page>
				<Box textAlign={'left'}>
				People from African countries can travel visa-free to Kenya
				</Box>
				<Box textAlign={'left'}>
				People from outside Africa have to apply online for the E-Visa. It is a quick and easy process to apply <Link
						href='https://evisa.go.ke/'
						isExternal
						color={'brown'}>here</Link>
				</Box>
			</Page>
		</Box>
	);
}

export default VisaInformation;
