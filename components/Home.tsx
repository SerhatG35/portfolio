import { IconButton, IconButtonProps } from '@chakra-ui/button'
import { Box, Center, CenterProps, Heading, HeadingProps } from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'
import { useState } from 'react'
import { IoArrowDownCircle } from 'react-icons/io5'
import { Link } from 'react-scroll'
import { ChakraNextImage } from './ChakraNextImage'

type MergeCenter<P, T> = Omit<P, keyof T> & T
type MotionCenterProps = MergeCenter<CenterProps, HTMLMotionProps<'div'>>
export const MotionCenter: React.FC<MotionCenterProps> = motion(Center)

type MergeHeading<P, T> = Omit<P, keyof T> & T
type MotionHeadingProps = MergeHeading<HeadingProps, HTMLMotionProps<'h2'>>
export const MotionHeading: React.FC<MotionHeadingProps> = motion(Heading)

type MergeIconButton<P, T> = Omit<P, keyof T> & T
type MotionIconButtonProps = MergeIconButton<IconButtonProps, HTMLMotionProps<'button'>>
export const MotionIconButton: React.FC<MotionIconButtonProps> = motion(IconButton)

const Landing = () => {
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <Box
            as='section'
            aria-label='home'
            id='home'
            h='100vh'
            w='100%'
            py='5em'
            position='relative'
        >
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
                    rounded='20px'
                >
                    <ChakraNextImage
                        w={['75%', '100%', '100%']}
                        objectFit={'cover'}
                        src={'/img/serhat.jpg'}
                        alt='Profile Photo'
                        loadingType='eager'
                        nextWidth='400px'
                        nextHeight='400px'
                        rounded='20px'
                        overflow='hidden'
                        boxShadow='0 2px 20px 2px #dbdbdb'
                    />
                </MotionCenter>
                <MotionHeading
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    fontFamily='Nunito'
                    fontWeight='400'
                    as='h1'
                    fontSize='clamp(1rem,7vw,3rem)'
                >
                    Hello, my name is Serhat,
                </MotionHeading>
                <MotionHeading
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    fontFamily='Nunito'
                    fontWeight='400'
                    fontSize='clamp(0.5rem,7vw,2rem)'
                    color='#5f5f5f'
                >
                    I&apos;m a passionate Front End Developer and React.js enthusiast.
                </MotionHeading>

                <MotionHeading
                    display={isDisabled ? 'none' : 'block'}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    fontFamily='Nunito'
                    fontWeight='400'
                    fontSize='clamp(1rem,5vw,1rem)'
                    color='#3f3f3f'
                >
                    Click the button below to see my latest projects.
                </MotionHeading>
                <Link
                    style={{
                        cursor: 'pointer',
                        display: isDisabled ? 'none' : 'flex',
                        position: 'absolute',
                        bottom: 1,
                    }}
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsDisabled(true)}
                >
                    <MotionIconButton
                        animate={{ y: -40 }}
                        transition={{
                            delay: 0.8,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.5,
                        }}
                        bg='transparent'
                        _focus={{ boxShadow: 'none' }}
                        _active={{ background: 'transparent' }}
                        _hover={{ background: 'transparent' }}
                        icon={<IoArrowDownCircle size={46} />}
                    />
                </Link>
            </Center>
        </Box>
    )
}

export default Landing
