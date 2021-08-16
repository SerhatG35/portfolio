import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'

type ChakraNextImageProps = {
    src: string
    alt: string
    loadingType: 'eager' | 'lazy'
    nextWidth: string
    nextHeight: string
} & Omit<BoxProps, 'as'>

export const ChakraNextImage = ({
    src,
    alt,
    loadingType = 'lazy',
    nextWidth,
    nextHeight,
    ...rest
}: ChakraNextImageProps) => {
    return (
        <Box
            position='relative'
            {...rest}
            rounded='15px'
            w={nextWidth}
            h={nextHeight}
            overflow='hidden'
            bg='red'
        >
            <Image
                objectFit='cover'
                src={src}
                alt={alt}
                loading={loadingType}
                width={nextWidth}
                height={nextHeight}
            />
        </Box>
    )
}
