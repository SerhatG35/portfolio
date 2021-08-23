import { Center, CenterProps, GridItem, Link } from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'
import { ChakraNextImage } from './ChakraNextImage'

type MergeCenter<P, T> = Omit<P, keyof T> & T
type MotionCenterProps = MergeCenter<CenterProps, HTMLMotionProps<'div'>>
export const MotionCenter: React.FC<MotionCenterProps> = motion(Center)

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
    return (
        <MotionCenter position='relative' variants={boxVariant}>
            <MotionCenter whileHover={{ y: -20 }}>
                <Link href={homepage} target='_blank' _focus={{ boxShadow: 'none' }}>
                    <GridItem
                        rounded='15px'
                        position='relative'
                        boxShadow='0 2px 8px  #DBDBDB'
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
        </MotionCenter>
    )
}

export default Project
