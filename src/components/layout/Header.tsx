import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack, Flex } from '@chakra-ui/react';


export const Header: React.FC = () => {
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
			backgroundColor: '#e6e6e6',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 10,
			textDecoration: 'none'
		}
	};

	const mainRoutes = [
		{ path: '/', name: 'Home' },
		{ path: '/travel', name: 'Travel' },
		{ path: '/visa-info', name: 'Visa Info' },
		{ path: '/wedding-info', name: 'Wedding Info' },
		{ path: '/our-love-story', name: 'Our Love Story' },
		{ path: '/contact', name: 'Contact' },
		{ path: '/faq', name: 'FAQ' }
	];

	return (
		<Flex
			fontFamily={'body'}
			height={28}
			justifyContent={'center'}
			width={'100%'}
		>
			<HStack
				color={'backgrounds.100'}
				width={'100%'}
				justifyContent={'center'}
				gap={4}
				fontSize={'lg'}
			>
				{mainRoutes.map((route, i) => (
					<NavLink
						key={`main_route_${i}`}
						to={route.path}
						style={({isActive}) => {
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
