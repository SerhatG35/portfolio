import { Center, CenterProps } from '@chakra-ui/react'
import Image from 'next/image'

type ChakraNextImageProps = {
    src: string
    alt: string
    loadingType: 'eager' | 'lazy'
    nextWidth: string
    nextHeight: string,
    objectFit: 'cover' | 'fill' | 'contain'
} & Omit<CenterProps, 'as'>

export const ChakraNextImage = ({
    src,
    alt,
    loadingType = 'lazy',
    nextWidth,
    nextHeight,
    objectFit,
    ...rest
}: ChakraNextImageProps) => {
    return (
        <Center position='relative' {...rest}>
            <Image
                objectFit={objectFit}
                src={src}
                alt={alt}
                loading={loadingType}
                width={nextWidth}
                height={nextHeight}
            />
        </Center>
    )
}
