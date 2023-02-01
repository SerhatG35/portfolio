import { Box, Center } from '@chakra-ui/react'
import axios from 'axios'
import { useAnimation, Variants } from 'framer-motion'
import { BlogTypes } from 'global'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Toaster } from 'utils/Toaster'
import Blog from './Blog'
import { MotionCenter, MotionHeading } from './MotionComponents'

const container: Variants = {
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const child: Variants = {
    hidden: {
        opacity: 0,
        x: -250,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2,
            duration: 0.25,
        },
    },
}

const Blogs = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })
    const [blogs, setBlogs] = useState<BlogTypes[] | undefined>(undefined)

    const getBlogs = async () => {
        try {
            const { data } = await axios.get<BlogTypes[]>(
                'https://dev.to/api/articles?username=serhatgenc'
            )
            setBlogs(data)
        } catch (error: any) {
            Toaster('', `${error?.response?.data}`, 'error')
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    useEffect(() => {
        if (inView) controls.start('show')
        if (!inView) controls.start('hidden')
    }, [controls, inView])

    return (
        <Box
            as='section'
            aria-label='blogs'
            id='blogs'
            w='100%'
            pt={['3em', '3.5em', '3.5em']}
            ref={ref}
            h={['unset', '100vh', '100vh']}
        >
            <MotionCenter
                w='90%'
                h='100%'
                margin='0 auto'
                maxW='1200px'
                flexDir='column'
                justifyContent='flex-start'
                initial='hidden'
                animate={controls}
                variants={container}
            >
                <MotionHeading
                    variants={child}
                    as='h1'
                    fontFamily='Nunito'
                    fontSize={['2xl', '4xl', '4xl']}
                    mb='1em'
                >
                    Blogs
                </MotionHeading>
                <Center h='100%' flexDir='column'>
                    {blogs?.map((blog) => (
                        <Blog blog={blog} key={blog.id} />
                    ))}
                </Center>
            </MotionCenter>
        </Box>
    )
}

export default Blogs
