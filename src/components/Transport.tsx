/* eslint-disable max-len */
import React from 'react';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
import { MdFlight, MdOutlineQuestionMark } from 'react-icons/md';
import { FaTrainSubway, FaBusSimple } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';

import image from '../images/transport.jpg';

interface TransportProps {
	children?: React.ReactNode;
	size?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Transport: React.FC<TransportProps> = (props: TransportProps) => {
	const [imageLoaded, setImageLoaded] = React.useState(false);
	const IconWrapper = ({ children, size = '40px' }) => (
		<div style={{
			fontSize: size,
			display: 'inline-flex',
			paddingTop: '5px',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			{children}
		</div>
	);
	return (
		<Box>
			<Flex direction={'column'} gap={10} px={[0, 4, 16, 24, 40]} lineHeight={8} fontSize={'lg'} color={'#4a4a4a'}>
				<Image
					src={image}
					borderRadius='full'
					alt='Dan Abramov'
					objectFit={'cover'}
					boxSize={400}
					loading='lazy'
					alignSelf={'center'}
					onLoad={() => setImageLoaded(true)}
				/>
				{imageLoaded && <Box textAlign={'left'}>
                These are the three recommended ways to travel to Diani.
				</Box>}
				{imageLoaded &&
				<Flex
					direction={'column'}
					gap={12}
				>
					<Flex
						gap={[8, null, 12]}
						alignItems={['center', null, null, 'start']}
						direction={['column', null, null, 'row']}
					>
						<IconWrapper size="30px"><MdFlight /></IconWrapper>
						<Box textAlign={'left'}>
							<Text>Book a flight with <Link href='https://www.jambojet.com/en-US' isExternal variant={'deco'}>Jambo Jet</Link> , <Link href='https://www.flysafarilink.com/en' isExternal variant={'deco'}>Safarilink</Link> or <Link href='https://www.flyals.com/' isExternal variant={'deco'}>Fly ALS</Link> from Wilson Airport (Nairobi) to Ukunda Airport (Diani). Each flight takes about one hour.</Text>
							<Text mt={4}>The cost of a return trip ranges from <Text as='b'>$40 / KSH 6,000</Text> to <Text as='b'>$100 / KSH 15,000</Text></Text>
						</Box>
					</Flex>
					<Flex
						gap={[8, null, 12]}
						alignItems={['center', null, null, 'start']}
						direction={['column', null, null, 'row']}
					>
						<IconWrapper size="22px"><FaTrainSubway /></IconWrapper>
						<Box textAlign={'left'}>
							<Text>Take the high-speed train (<Link href='https://metickets.krc.co.ke/' isExternal variant={'deco'}>Madaraka Express</Link>) from Nairobi to Mombasa. Each train leaves daily either at 3pm or 10pm and takes about six hours.</Text>
							<Text>Afterwards, take an Uber or Taxi to Diani, which will go over the ferry. Without traffic, this ride could take one hour.</Text>
							<Text mt={4}>The cost of a return trip ranges from <Text as='b'>$38 / KSH 5800</Text> to <Text as='b'>$60 / KSH 9,000</Text></Text>
						</Box>
					</Flex>
					<Flex
						gap={[8, null, 12]}
						alignItems={['center', null, null, 'start']}
						direction={['column', null, null, 'row']}
					>
						<IconWrapper size="24px"><FaBusSimple /></IconWrapper>
						<Box textAlign={'left'}>
							<Text>Enjoy a scenic bus trip from Nairobi to Diani.</Text>
							<Text>The bus ride takes about ten hours.</Text>
							<Text mt={4}>The cost of a return trip ranges from <Text as='b'>$16 / KSH 2,500</Text> to <Text as='b'>$26 / KSH 4,000</Text></Text>
						</Box>
					</Flex>
					<Flex
						gap={[2, null, 6]}
						alignItems={['center', null, null, 'start']}
						direction={['column', null, null, 'row']}
					>
						<Flex mb={[4, null, null, 'auto']}>
							<IconWrapper size="26px">
								<FaCar />
							</IconWrapper>
							<IconWrapper size="20px">
								<MdOutlineQuestionMark color='#E53E3E' />
							</IconWrapper>
						</Flex>
						<Box textAlign={'left'}>
                		Hiring a car is also possible but <Text display={'inline'} color={'warning.100'}>not recommended</Text> unless you are familiar with driving on Kenyan roads.
						</Box>
					</Flex>
				</Flex>}
			</Flex>
		</Box>
	);
};

export default Transport;
