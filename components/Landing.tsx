import { Box, Center, CenterProps, Heading, HeadingProps } from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'
import { ChakraNextImage } from './ChakraNextImage'

type MergeCenter<P, T> = Omit<P, keyof T> & T
type MotionCenterProps = MergeCenter<CenterProps, HTMLMotionProps<'div'>>
export const MotionCenter: React.FC<MotionCenterProps> = motion(Center)

type MergeHeading<P, T> = Omit<P, keyof T> & T
type MotionHeadingProps = MergeHeading<HeadingProps, HTMLMotionProps<'h2'>>
export const MotionHeading: React.FC<MotionHeadingProps> = motion(Heading)

const Landing = () => {
    return (
        <Box as='section' id='landing' h='100vh' w='100%' py='5em'>
            <Center
                h='100%'
                w='90%'
                margin='0 auto'
                maxW='1200px'
                flexDir='column'
                justifyContent='space-evenly'
            >
                <MotionCenter
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <ChakraNextImage
                        // w={['100%']}
                        // h='400px'
                        src={'/img/serhat.jpg'}
                        alt='Profile Photo'
                        loadingType='eager'
                        nextWidth='400px'
                        nextHeight='400px'
                    />
                </MotionCenter>
                <MotionHeading
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    fontFamily='Nunito'
                    as='h1'
                >
                    Hello, my name is Serhat,
                </MotionHeading>
                <MotionHeading
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    fontFamily='Nunito'
                >
                    I&apos;m a passionate Front End Developer and React.js Enthusiast
                </MotionHeading>
            </Center>
        </Box>
    )
}

export default Landing
