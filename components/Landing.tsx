import { Center, Heading } from '@chakra-ui/layout'
import Image from 'next/image'
import picture from '../public/img/serhat.jpg'

const Landing = () => {
    return (
        <Center
            as='section'
            id='landing'
            h='100vh'
            w='100%'
            flexDir='column'
            justifyContent='space-between'
            px='16em'
            py='10em'
        >
            <Center boxSize='sm' borderRadius='10px' overflow='hidden'>
                <Image priority={true} src={picture} alt='' />
            </Center>
            <Heading fontFamily='Nunito' as='h1'>
                Hello, my name is Serhat,
            </Heading>
            <Heading fontFamily='Nunito'>
                I&apos;m a passionate Front End Developer and React.js Enthusiast
            </Heading>
        </Center>
    )
}

export default Landing
