import { Box, Center, Text, TextProps } from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'
import { Link as ReactScroll } from 'react-scroll'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionTextProps = Merge<TextProps, HTMLMotionProps<'p'>>
export const MotionText: React.FC<MotionTextProps> = motion(Text)

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
                        <MotionText
                            whileHover={{ color: '#F2542C', transition: { duration: 0.2 } }}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            fontSize='2xl'
                            bgGradient='linear(to-l, #2C88F2,#F2542C)'
                            bgClip='text'
                        >
                            Serhat Genç
                        </MotionText>
                    </ReactScroll>
                    <Center>
                        <ReactScroll
                            style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <MotionText
                                whileHover={{ color: '#F2542C', transition: { duration: 0.2 } }}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                fontSize='2xl'
                            >
                                Projects
                            </MotionText>
                        </ReactScroll>
                        <ReactScroll
                            style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <MotionText
                                whileHover={{ color: '#F2542C', transition: { duration: 0.2 } }}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.75 }}
                                fontSize='2xl'
                            >
                                Contact
                            </MotionText>
                        </ReactScroll>
                    </Center>
                </Center>
            </Box>
        </Box>
    )
}

export default Navbar
