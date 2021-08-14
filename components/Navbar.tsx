import { Box, Center, Text } from '@chakra-ui/layout'
import { Link as ReactScroll } from 'react-scroll'

const Navbar = () => {
    return (
        <Box
            as='nav'
            w='100%'
            borderBottom='1px solid #DBDBDB'
            py='0.25em'
            position='fixed'
            top='0'
            zIndex='1000'
            overflow='hidden'
            backdropFilter='blur(10px)'
            bg='hsla(0,0%,100%,.6)'
            fontWeight='700'
        >
            <Box w='90%' margin='0 auto' maxW={['1200px']}>
                <Center w='100%' justifyContent='space-between'>
                    <ReactScroll
                        style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                        to='landing'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Text
                            fontSize='2xl'
                            bgGradient='linear(to-l, #2C88F2,#F2542C)'
                            bgClip='text'
                        >
                            Serhat Genç
                        </Text>
                    </ReactScroll>
                    <Center>
                        <ReactScroll
                            style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <Text fontSize='2xl'>Projects</Text>
                        </ReactScroll>
                        <ReactScroll
                            style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <Text fontSize='2xl'>Contact</Text>
                        </ReactScroll>
                    </Center>
                </Center>
            </Box>
        </Box>
    )
}

export default Navbar
