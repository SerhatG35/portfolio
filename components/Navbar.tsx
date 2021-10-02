import { Box, Center } from '@chakra-ui/layout'
import { Link as ReactScroll } from 'react-scroll'
import { MotionCenter, MotionText } from './MotionComponents'

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
}

const variants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
        },
    },
}

const Navbar = () => {
    return (
        <Box
            as='nav'
            w='100%'
            borderBottom='1px solid #DBDBDB'
            position='fixed'
            top='0'
            zIndex='1000'
            overflow='hidden'
            backdropFilter='blur(10px)'
            bg='hsla(0,0%,100%,.6)'
            fontWeight='700'
        >
            <Center h={['3em', '3.5em', '3.5em']} w='90%' margin='0 auto' maxW={['1200px']}>
                <MotionCenter
                    initial='hidden'
                    animate='show'
                    variants={container}
                    w='100%'
                    justifyContent='space-between'
                >
                    <ReactScroll
                        style={{ cursor: 'pointer', opacity: 0.6 }}
                        to='landing'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <MotionText
                            variants={variants}
                            mx={['0.2em', '0.5em', '1em', '1em']}
                            my={['0.2em']}
                            fontSize={['lg', 'xl', '2xl', '2xl']}
                            bgGradient='linear(to-l, #542CF2,#F2542C)'
                            bgClip='text'
                            aria-label='scroll to home section'
                        >
                            Serhat Genç
                        </MotionText>
                    </ReactScroll>
                    <Center>
                        <ReactScroll
                            style={{ cursor: 'pointer', opacity: 0.6 }}
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <MotionText
                                variants={variants}
                                mx={['0.2em', '0.5em', '1em', '1em']}
                                my={['0.2em']}
                                fontSize={['lg', 'xl', '2xl', '2xl']}
                                aria-label='scroll to projects section'
                            >
                                Projects
                            </MotionText>
                        </ReactScroll>
                        <ReactScroll
                            style={{ cursor: 'pointer', opacity: 0.6 }}
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <MotionText
                                variants={variants}
                                mx={['0.2em', '0.5em', '1em', '1em']}
                                my={['0.2em']}
                                fontSize={['lg', 'xl', '2xl', '2xl']}
                                aria-label='scroll to contact section'
                            >
                                Contact
                            </MotionText>
                        </ReactScroll>
                    </Center>
                </MotionCenter>
            </Center>
        </Box>
    )
}

export default Navbar
