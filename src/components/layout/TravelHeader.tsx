import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrap, WrapItem, Flex } from '@chakra-ui/react';


export const TravelHeader: React.FC = () => {
	const styles = {
		link: {
			color: '#4a4a4a',
			// backgroundColor: 'rgba(209, 188, 183, 0.2)',
			textDecoration: 'none',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 40
		},
		activeLink: {
			color: '#4a4a4a',
			backgroundColor: 'rgba(209, 188, 183, 0.4)',
			textDecoration: 'none',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 40
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
			height={[16, 12, 8]}
			mb={20}
			justifyContent={'center'}
			width={'100%'}
		>
			<Wrap
				color={'backgrounds.100'}
				fontSize={'lg'}
				fontWeight={'bold'}
				spacing={4}  // Adjust spacing to ensure it doesn't push items to the next line
				justify={['space-between', 'center']}
				width={'100%'}
			>
				{travelRoutes.map((route, i) => (
					<WrapItem key={`travel_route_${i}`} width={['calc(50% - 1rem)', 'auto']}>
						<NavLink to={route.path} style={({ isActive }) => (
							isActive ? styles.activeLink : styles.link
						)}>
							{route.name}
						</NavLink>
					</WrapItem>
				))}
			</Wrap>
		</Flex>
	);
};
