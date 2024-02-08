/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import image1 from '../images/our-love-story-1.jpg';
import image2 from '../images/our-love-story-2.png';
import image3 from '../images/our-love-story-3.jpg';
import image4 from '../images/our-love-story-4.jpg';
import image5 from '../images/our-love-story-5.jpg';

function OurLoveStory() {

	return (
		<Box>
			<Flex direction={'column'} gap={10} px={8} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Image src={image1} borderRadius='full' alt='Yvonne and Sebastian' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf='center'/>
				<Text>
                    Sebastian and Yvonne met in December 2016 and it was a story of coincidence or fate or God who connected them. Yvonne was in Hamburg living with her host family at the time and Sebastian was visiting his parents in Lübeck.
                    When he was driving back home to Frankfurt, he stopped by Hamburg and decided to use the dating app OkCupid.
				</Text>
				<Image src={image2} borderRadius='full' alt='Yvonne and Sebastian' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf='center'/>
				<Text>
                    On the other side of town, Yvonne was doing the same. One thing to know about those apps, they work with location so the closer people are, you will be connected together. Yvonne texted Sebastian, because she was so impressed by his profile and the app matched their compatibility to over 90%! Since the first text was sent, the two connected and their relationship started to grow.
				</Text>
				<Image src={image3} borderRadius='full' alt='Yvonne and Sebastian' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf='center'/>
				<Text>
                    They were in a long-distance relationship for the first four years, while they both completed their studies. During the start of the pandemic in 2020, they moved in together in Berlin where they currently still live.
				</Text>
				<Image src={image4} borderRadius='full' alt='Yvonne and Sebastian' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf='center'/>
				<Text>
                    In the seven years of their relationship, they have travelled the world together, comforted each other during troubled times, survived a global pandemic, celebrated birthdays and great moments and loved each other endlessly.
				</Text>
				<Image src={image5} borderRadius='full' alt='Yvonne and Sebastian' objectFit={'cover'} boxSize={400} loading='lazy' alignSelf='center'/>
				<Text>
                    We're so excited for you to join us as we say "I do" at our destination wedding in October of 2024. See you soon!
				</Text>
			</Flex>
		</Box>
	);
}

export default OurLoveStory;
