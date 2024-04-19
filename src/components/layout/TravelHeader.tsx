import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapItem } from '@chakra-ui/react';
import HeaderPage from './HeaderPage';

export const TravelHeader: React.FC = () => {
	const styles = {
		link: {
			color: 'brand.500',
			textDecoration: 'none',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 40
		},
		activeLink: {
			color: 'brand.500',
			backgroundColor: 'rgba(209, 188, 183, 0.3)',
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
		<HeaderPage>
			{travelRoutes.map((route, i) => (
				<WrapItem
					key={`travel_route_${i}`}
					width={['calc(50% - 1rem)', 'auto']}
				>
					<NavLink to={route.path} style={({ isActive }) => (
						isActive ? styles.activeLink : styles.link
					)}>
						{route.name}
					</NavLink>
				</WrapItem>
			))}
		</HeaderPage>
	);
};
