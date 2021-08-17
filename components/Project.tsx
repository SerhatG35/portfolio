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

const Project = ({ homepage, name }: ProjectTypes) => {
    return (
        <MotionCenter position='relative' whileHover={{ y: -20 }}>
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
                        loadingType='lazy'
                        nextWidth='600px'
                        nextHeight='300px'
                        rounded='15px'
                        overflow='hidden'
                    />
                </GridItem>
            </Link>
        </MotionCenter>
    )
}

export default Project
