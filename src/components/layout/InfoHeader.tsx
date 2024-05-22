import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderPage from './HeaderPage';

export const InfoHeader: React.FC = () => {
	const styles = {
		link: {
			color: 'brand.500',
			textDecoration: 'none',
			fontWeight: 'normal',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 4
		},
		activeLink: {
			color: 'brand.500',
			backgroundColor: 'rgba(209, 188, 183, 0.3)',
			textDecoration: 'none',
			fontWeight: 'normal',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 4
		}
	};

	const infoRoutes = [
		{ path: 'program', name: 'Program' },
		{ path: 'dress-code', name: 'Dress code' },
		{ path: 'registry', name: 'Registry' },
		{ path: 'wedding-party', name: 'Wedding party' }
	];

	return (
		<HeaderPage>
			{infoRoutes.map((route, i) => (
				<NavLink key={`info_route_${i}`} to={route.path} style={({ isActive }) => (
					isActive ? styles.activeLink : styles.link
				)}>
					{route.name}
				</NavLink>
			))}
		</HeaderPage>
	);
};

export default InfoHeader;
