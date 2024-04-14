import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack, Flex } from '@chakra-ui/react';


export const InfoHeader: React.FC = () => {
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
			borderRadius: 15,
			textDecoration: 'none'
		}
	};

	const infoRoutes = [
		{ path: 'program', name: 'Program' },
		{ path: 'dress-code', name: 'Dress code' },
		{ path: 'registry', name: 'Registry' },
		{ path: 'wedding-party', name: 'Wedding party' }
	];

	return (
		<Flex
			fontFamily={'body'}
			height={16}
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
				{infoRoutes.map((route, i) => (
					<NavLink key={`info_route_${i}`} to={route.path} style={({isActive}) => {
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
