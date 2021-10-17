import { Box, Center } from '@chakra-ui/layout'
import { BiDownArrow } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { ChakraNextImage } from './ChakraNextImage'
import { MotionCenter, MotionHeading, MotionIconButton } from './MotionComponents'

const Landing = () => {
    return (
        <Box
            as='section'
            aria-label='landing'
            id='landing'
            h='100vh'
            w='100%'
            pt={['3em', '3.5em', '3.5em']}
            pb={['3em', '0', '0']}
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
                        w={['55%', '85%', '85%']}
                        objectFit={'cover'}
                        src={'/img/serhat.jpg'}
                        alt='Profile Photo'
                        loadingType='eager'
                        nextWidth='400px'
                        nextHeight='400px'
                        rounded='50%'
                        overflow='hidden'
                        boxShadow='0 2px 12px #dbdbdb'
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
                        marginTop: '1em',
                    }}
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <MotionIconButton
                        aria-label='button to navigate projects section'
                        animate={{ y: -20, opacity: 1 }}
                        transition={{
                            delay: 1.6,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.5,
                        }}
                        initial={{ opacity: 0 }}
                        bg='transparent'
                        _focus={{ boxShadow: 'none' }}
                        _active={{ background: 'transparent' }}
                        _hover={{ background: 'transparent' }}
                        icon={<BiDownArrow size={28} />}
                    />
                </Link>
            </Center>
        </Box>
    )
}

export default Landing
