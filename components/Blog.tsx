import React, { FC } from 'react'
import { Badge, Center, Heading, Text, Link, Divider } from '@chakra-ui/react'
import { BlogTypes } from 'global'
import { ChakraNextImage } from './ChakraNextImage'
import { MotionCenter } from './MotionComponents'
import { AiFillHeart } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { Variants } from 'framer-motion'

const boxVariant: Variants = {
    hidden: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: 'tween' },
    },
}

type BlogProps = {
    blog: BlogTypes
}

const Blog: FC<BlogProps> = ({ blog }) => {
    return (
        <MotionCenter
            bg='#EDEDED'
            mb='8'
            p='10px 20px'
            w='100%'
            position='relative'
            variants={boxVariant}
            flexDir='column'
            rounded='15px'
        >
            <Center w='100%' alignItems='flex-start' flexDir='column'>
                <Center mb='5' justifyContent='space-between' alignItems='center' w='100%'>
                    <Link
                        w='90%'
                        href={blog.url}
                        target='_blank'
                        style={{ textDecoration: 'none' }}
                    >
                        <Heading
                            textAlign='start'
                            cursor='pointer'
                            _hover={{ color: '#808080' }}
                            fontSize={['lg', 'xl', '2xl']}
                        >
                            {blog.title}
                        </Heading>
                    </Link>
                    <Text fontSize={['smaller', 'sm', 'md']}>{blog?.readable_publish_date}</Text>
                </Center>
                <Center
                    justifyContent='start'
                    flexDirection={['column', 'row', 'row']}
                    alignItems='flex-start'
                >
                    <Link href={blog.url} target='_blank' style={{ textDecoration: 'none' }}>
                        <ChakraNextImage
                            objectFit={'cover'}
                            src={blog.cover_image}
                            alt={blog.title}
                            loadingType='eager'
                            nextWidth='300px'
                            nextHeight='150px'
                            rounded='15px'
                            overflow='hidden'
                            mr='4'
                        />
                    </Link>
                    <Center
                        flexDir='column'
                        justifyContent='space-around'
                        alignItems='flex-start'
                        w={['100%', '70%', '70%']}
                        h='100%'
                    >
                        <Text textAlign='start' fontSize={['md', 'lg', 'xl']}>
                            {blog.description.split('  ')[1]}
                        </Text>
                        <Center w={['100%', 'unset', 'unset']}>
                            {blog.tag_list.map((tag) => (
                                <Badge
                                    fontSize='xx-small'
                                    mr='1'
                                    rounded='4px'
                                    bg='#F2542C'
                                    color='#fff'
                                    key={tag}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </Center>
                        <Center
                            w={['100%', 'unset', 'unset']}
                            fontSize={['xx-small', 'xs', 'smaller', 'sm']}
                        >
                            <AiFillHeart color='red' />
                            <Text>{blog.positive_reactions_count} Reactions</Text>
                            <Center m='2' h='12px'>
                                <Divider borderColor='#000' orientation='vertical' />
                            </Center>
                            <Center>
                                <FaRegComment />
                                <Text ml='1'>
                                    {blog.comments_count}{' '}
                                    {blog.comments_count > 0 ? 'Comments' : 'Comment'}
                                </Text>
                            </Center>
                            <Center m='2' h='12px'>
                                <Divider borderColor='#000' orientation='vertical' />
                            </Center>
                            <BiTime />
                            <Text ml='1'>{blog.reading_time_minutes} min to read</Text>
                        </Center>
                    </Center>
                </Center>
            </Center>
        </MotionCenter>
    )
}

export default Blog
