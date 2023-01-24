import { Box, Center, Heading } from '@chakra-ui/layout'
import axios from 'axios'
import { repoList } from 'constants/RepoList'
import { useAnimation } from 'framer-motion'
import { GithubRepoTypes } from 'global'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Toaster } from 'utils/Toaster'
import { MotionGrid } from './MotionComponents'
import Project from './Project'

const container = {
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const Projects = () => {
    const [repos, setRepos] = useState<GithubRepoTypes | undefined>(undefined)
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

    const getRepositories = async () => {
        try {
            const { data } = await axios.get<GithubRepoTypes>(
                'https://api.github.com/users/SerhatG35/repos'
            )
            data.sort((a, b) => {
                return Number(new Date(b.created_at)) - Number(new Date(a.created_at))
            })
            setRepos(data)
        } catch (error: any) {
            Toaster('', `${error?.response?.data}`, 'error')
        }
    }

    useEffect(() => {
        getRepositories()
    }, [])

    useEffect(() => {
        if (inView) controls.start('show')
        if (!inView) controls.start('hidden')
    }, [controls, inView])

    return (
        <Box
            as='section'
            aria-label='projects'
            id='projects'
            w='100%'
            py={['3em', '3.5em', '3.5em']}
            ref={ref}
        >
            <Center h='100%' w='90%' margin='0 auto' maxW='1200px' flexDir='column'>
                <Heading fontSize={['2xl', '4xl', '4xl']} fontFamily='Nunito' mb='1em'>
                    Projects
                </Heading>
                <MotionGrid
                    h='100%'
                    templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
                    gap={8}
                    initial='hidden'
                    animate={controls}
                    variants={container}
                >
                    {repos?.map((repo) => {
                        if (repoList.includes(repo.name))
                            return (
                                <Project key={repo.id} homepage={repo.homepage} name={repo.name} />
                            )
                    })}
                </MotionGrid>
            </Center>
        </Box>
    )
}

export default Projects
