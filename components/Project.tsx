import { Center, GridItem, Link, Text } from '@chakra-ui/layout'
import isTouchDevice from 'is-touch-device'
import { GoLinkExternal } from 'react-icons/go'
import { ChakraNextImage } from './ChakraNextImage'
import { MotionCenter } from './MotionComponents'

type ProjectTypes = {
    homepage: string
    name: string
}

const boxVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
    },
}

const Project = ({ homepage, name }: ProjectTypes) => {
    const touchDevice = isTouchDevice()

    return (
        <MotionCenter position='relative' variants={boxVariant} flexDir='column'>
            <MotionCenter
                filter={touchDevice ? 'none' : 'grayscale(0.5)'}
                whileHover={{
                    y: -20,
                    transition: { type: 'tween', duration: 0.15 },
                    filter: 'grayscale(0)',
                }}
                zIndex='1'
            >
                <Link href={homepage} target='_blank' _focus={{ boxShadow: 'none' }}>
                    <GridItem
                        rounded='15px'
                        position='relative'
                        boxShadow='0 2px 8px #DBDBDB'
                        border='1px solid #DBDBDB'
                    >
                        <ChakraNextImage
                            objectFit={'cover'}
                            src={`/img/repo-img/${name}.png`}
                            alt={name}
                            loadingType='eager'
                            nextWidth='600px'
                            nextHeight='300px'
                            rounded='15px'
                            overflow='hidden'
                        />
                    </GridItem>
                </Link>
            </MotionCenter>
            <Center fontSize='sm' fontWeight='700' color='blue.400' position='absolute' bottom='0'>
                <Text mr='4px' textDecor='underline'>
                    Live Demo
                </Text>
                <GoLinkExternal strokeWidth={0.7} />
            </Center>
        </MotionCenter>
    )
}

export default Project
