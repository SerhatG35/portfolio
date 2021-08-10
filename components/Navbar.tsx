import { Center } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <Center
            as='nav'
            w='100%'
            borderBottom='1px solid #DBDBDB'
            px={['1em', '4em', '8em']}
            justifyContent='space-between'
            fontSize='2xl'
            position='sticky'
            top='0'
            bg='#f5f5f5'
            zIndex='1000'
            overflow='hidden'
        >
            <NextLink href='/#'>
                <Link margin='.5em'>Serhat</Link>
            </NextLink>
            <Center>
                <NextLink href='/#projects'>
                    <Link margin='.5em 1em'>Projects</Link>
                </NextLink>
                <NextLink href='/#contact'>
                    <Link margin='.5em 1em'>Contact</Link>
                </NextLink>
            </Center>
        </Center>
    )
}

export default Navbar
