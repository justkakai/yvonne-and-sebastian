/* eslint-disable max-len */
import React from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';
import Page from './layout/Page';

import suzzie from '../images/suzzie.jpg';

function Contact() {
	return (
		<Box mt={12}>
			<Page>
				<Box>
					<Text fontSize="2xl" fontWeight="bold" mb={8}>
                        Suzzie
					</Text>
					<Text fontSize="lg" mb={8}>
                        Suzzie is the wedding planner. Feel free to message her <Link href="https://wa.me/254724826188" isExternal color="teal.500">here</Link> for more information.
					</Text>
					<Image
						src={suzzie}
						alt="Suzzie"
						borderRadius="lg"
						boxShadow="lg"
						mb={8}
						mx="auto"
					/>
					<Text fontSize="lg" mb={8}>
                        An exceptional, extraordinary event planner with a diverse skill set, Suzzie has an eye for detail and aesthetics. No vision is too daunting for her and her team, and she takes pride in delivering unique experiences to clients.
					</Text>
					<Text fontSize="lg" mb={20}>
                        She loves travelling and experiencing different cultures, is a culinary explorer, and believes that small individual sustainability actions make the world a better place.
					</Text>
				</Box>
			</Page>
		</Box>
	);
}

export default Contact;
