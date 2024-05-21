/* eslint-disable max-len */
import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import image1 from '../images/our-love-story-1.jpg';
import image2 from '../images/our-love-story-2.jpg';
import image3 from '../images/our-love-story-3.jpg';
import image4 from '../images/our-love-story-4.jpg';
import image5 from '../images/our-love-story-5.jpg';
import Page from './layout/Page';

function OurLoveStory() {
	const storyParts = [
		{
			imgSrc: image1,
			imgAlt: 'Yvonne and Sebastian',
			text: 'Sebastian and Yvonne met in December 2016 and it was a story of coincidence or fate or God who connected them. Yvonne was in Hamburg living with her host family at the time and Sebastian was visiting his parents in Lübeck. When he was driving back home to Frankfurt, he stopped by Hamburg and decided to use the dating app OkCupid.'
		},
		{
			imgSrc: image2,
			imgAlt: 'Yvonne and Sebastian',
			text: 'On the other side of town, Yvonne was doing the same. One thing to know about those apps, they work with location so the closer people are, you will be connected together. Yvonne texted Sebastian, because she was so impressed by his profile and the app matched their compatibility to over 90%! Since the first text was sent, the two connected and their relationship started to grow.'
		},
		{
			imgSrc: image3,
			imgAlt: 'Yvonne and Sebastian',
			text: 'They were in a long-distance relationship for the first four years, while they both completed their studies. During the start of the pandemic in 2020, they moved in together in Berlin where they currently still live.'
		},
		{
			imgSrc: image4,
			imgAlt: 'Yvonne and Sebastian',
			text: 'In the seven years of their relationship, they have travelled the world together, comforted each other during troubled times, survived a global pandemic, celebrated birthdays and great moments and loved each other endlessly.'
		},
		{
			imgSrc: image5,
			imgAlt: 'Yvonne and Sebastian',
			text: 'We\'re so excited for you to join us as we say "I do" at our destination wedding in October of 2024. See you soon!'
		}
	];

	return (
		<Box mt={[0, null, 12]}>
			<Page heading='Our love story'>
				{storyParts.map((part, index) => (
					<React.Fragment key={index}>
						<Image
							src={part.imgSrc}
							borderRadius='full'
							alt={part.imgAlt}
							objectFit={'cover'}
							boxSize={400}
							boxShadow={'lg'}
							loading='lazy'
							alignSelf='center'
						/>
						<Text>{part.text}</Text>
					</React.Fragment>
				))}
			</Page>
		</Box>
	);
}

export default OurLoveStory;
