import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack, Flex } from '@chakra-ui/react';


export const TravelHeader: React.FC = () => {
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

	const travelRoutes = [
		{ path: 'transport', name: 'Transport' },
		{ path: 'accommodation', name: 'Accommodation' },
		{ path: 'visa-info', name: 'Visa info' }
	];

	return (
		<Flex
			fontFamily={'body'}
			height={8}
			mb={12}
			justifyContent={'center'}
			width={'100%'}
		>
			<HStack
				color={'backgrounds.100'}
				width={'100%'}
				justifyContent={'center'}
				fontSize={'lg'}
				gap={4}
			>
				{travelRoutes.map((route, i) => (
					<NavLink key={`travel_route_${i}`} to={route.path} style={({isActive}) => {
						if (isActive) {
							return styles.activeLink;
						} else {
							return styles.link;
						}
					}}>
						{route.name}
					</NavLink>
				))}
			</HStack>
		</Flex>
	);
};
