/* eslint-disable max-len */
import React from 'react';
import { Box, Grid, GridItem, Image, Text, Flex } from '@chakra-ui/react';
import Page from './layout/Page';

import dresscode1 from '../images/dresscode1.jpeg';
import dresscode2 from '../images/dresscode2.jpeg';
import dresscode3 from '../images/dresscode3.jpeg';
import dresscode4 from '../images/dresscode4.jpg';
import dresscode5 from '../images/dresscode5.jpeg';
import dresscode6 from '../images/dresscode6.png';

const dressCodes = [
	{
		image: dresscode1,
		text: 'Flowy dresses and light suits in shades of blue and green for a refreshing oceanic feel.',
		colors: ['#518B68', '#ABC388', '#EDE1D1', '#B56F46', '#384F39']
	},
	{
		image: dresscode2,
		text: 'Smart casual outfits perfect for a breezy evening by the beach.',
		colors: ['#283F06', '#718795', '#D2B29D', '#A58B74', '#5C694F']
	},
	{
		image: dresscode3,
		text: 'Light fabrics and pastel colors to keep you cool and stylish during the sunny outdoor ceremony.',
		colors: ['#C3D1BE', '#AD916D', '#DBD8D2', '#818B75', '#343922']
	},
	{
		image: dresscode4,
		text: 'Traditional attire with a modern twist, ideal for a sophisticated beachside event.',
		colors: ['#F0C598', '#CB9B83', '#ABC9D8', '#99ACBE', '#B5C059']
	},
	{
		image: dresscode5,
		text: 'Casual yet chic outfits with a touch of formality, perfect for a laid-back beach celebration.',
		colors: ['#578A85', '#467F7A', '#455C67', '#4A72A6', '#002556']
	},
	{
		image: dresscode6,
		text: 'Comfortable and stylish ensembles that let you enjoy the festivities all day long.',
		colors: ['#73A9B4', '#4A6A76', '#BCCFCE', '#D4B599', '#BAACA2']
	}
];

function DressCode() {
	return (
		<Box>
			<Page heading='Dress Code' /* fontsize='xl' */>
				<Box textAlign={'left'}>
					We encourage you to dress in the beautiful colors of the ocean or soft pastel hues to complement our seaside setting. While we want everyone to feel comfortable and stylish, we kindly ask that you avoid wearing white.
				</Box>
				<Box textAlign={'left'} mb={[0, null, null, 8]}>
					Feel free to have a look at the photos below for some ideas.
				</Box>
				{dressCodes.map((dressCode, index) => (
					<Grid
						key={index}
						templateColumns={{ base: '1fr', md: '1fr 1fr' }}
						gap={6}
						alignItems="center"
						mb={10}
					>
						{index % 2 === 0 ? (
							<>
								<GridItem>
									<Flex direction="column" mt={index === 0 ? [10, null, 0] : 0}>
										<Image
											src={dressCode.image}
											alt={`Dress code recommendation ${index + 1}`}
											borderRadius="lg"
											boxShadow="lg"
											loading="lazy"
											mb={4}
										/>
										<Flex direction="row" justifyContent="center" flexWrap="wrap">
											{dressCode.colors.map((color, i) => (
												<Box key={i} bg={color} h="30px" w="30px" mr={1} mb={1} />
											))}
										</Flex>
									</Flex>
								</GridItem>
								<GridItem display="flex" alignItems="center">
									<Text>
										{dressCode.text}
									</Text>
								</GridItem>
							</>
						) : (
							<>
								<GridItem display="flex" alignItems="center">
									<Text>
										{dressCode.text}
									</Text>
								</GridItem>
								<GridItem>
									<Flex direction="column">
										<Image
											src={dressCode.image}
											alt={`Dress code recommendation ${index + 1}`}
											borderRadius="lg"
											boxShadow="lg"
											loading="lazy"
											mb={4}
										/>
										<Flex direction="row" justifyContent="center" flexWrap="wrap">
											{dressCode.colors.map((color, i) => (
												<Box key={i} bg={color} h="30px" w="30px" mr={1} mb={1} />
											))}
										</Flex>
									</Flex>
								</GridItem>
							</>
						)}
					</Grid>
				))}
			</Page>
		</Box>
	);
}

export default DressCode;
