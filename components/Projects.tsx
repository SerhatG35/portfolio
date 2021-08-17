import { Box, Center, CenterProps, Grid, GridProps, Heading } from '@chakra-ui/layout'
import axios from 'axios'
import { excludeList } from 'constants/RepoExcludeList'
import { HTMLMotionProps, motion, useAnimation } from 'framer-motion'
import { GithubRepoTypes } from 'global'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Project from './Project'

type MergeCenter<P, T> = Omit<P, keyof T> & T
type MotionCenterProps = MergeCenter<CenterProps, HTMLMotionProps<'div'>>
export const MotionCenter: React.FC<MotionCenterProps> = motion(Center)

type MergeGrid<P, T> = Omit<P, keyof T> & T
type MotionGridProps = MergeGrid<GridProps, HTMLMotionProps<'div'>>
export const MotionGrid: React.FC<MotionGridProps> = motion(Grid)

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
        },
    },
}

const Projects = () => {
    const [repos, setRepos] = useState<GithubRepoTypes | undefined>(undefined)
    const controls = useAnimation()
    const [ref, inView] = useInView({ rootMargin: '-50%', triggerOnce: true })

    const getRepositories = async () => {
        const { data } = await axios.get<GithubRepoTypes>(
            'https://api.github.com/users/SerhatG35/repos',
            {
                headers: {
                    Authorization: process.env.ACCESS_TOKEN,
                },
            }
        )
        const filteredData = data.filter(a => !excludeList.includes(a.name))
        filteredData.sort((a, b) => {
            return Number(new Date(b.created_at)) - Number(new Date(a.created_at))
        })
        setRepos(filteredData)
    }

    useEffect(() => {
        getRepositories()
    }, [])

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    return (
        <Box as='section' id='projects' w='100%' py='5em' ref={ref}>
            <Box h='100%' w='90%' margin='0 auto' maxW='1200px'>
                <Center w='100%' h='100%' flexDir='column'>
                    <Heading fontFamily='Nunito' mb='2em'>
                        Projects
                    </Heading>
                    <MotionGrid
                        h='100%'
                        templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
                        gap={8}
                        initial='hidden'
                        animate={controls}
                        variants={variants}
                    >
                        {repos?.map(repo => {
                            return (
                                <Project key={repo.id} homepage={repo.homepage} name={repo.name} />
                            )
                        })}
                    </MotionGrid>
                </Center>
            </Box>
        </Box>
    )
}

export default Projects