import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrap, WrapItem, Flex } from '@chakra-ui/react';

export const InfoHeader: React.FC = () => {
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

	const infoRoutes = [
		{ path: 'program', name: 'Program' },
		{ path: 'dress-code', name: 'Dress code' },
		{ path: 'registry', name: 'Registry' },
		{ path: 'wedding-party', name: 'Wedding party' }
	];

	return (
		<Flex
			fontFamily={'body'}
			height={[16, 12, 8]}
			mb={28}
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
				{infoRoutes.map((route, i) => (
					<WrapItem
						key={`info_route_${i}`}
						width={['auto', 'calc(50% - 2rem)', 'auto']}
						// width={['calc(50% - 2rem)', 'auto']}
					>
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

export default InfoHeader;
