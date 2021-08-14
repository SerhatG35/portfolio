import { Img } from '@chakra-ui/image'
import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/layout'
import axios from 'axios'
import { excludeList } from 'constants/ExcludeList'
import { GithubRepoTypes } from 'global'
import { useEffect, useState } from 'react'

const Projects = () => {
    const [repos, setRepos] = useState<GithubRepoTypes | undefined>(undefined)
    const getRepositories = async () => {
        const { data } = await axios.get<GithubRepoTypes>(
            'https://api.github.com/users/SerhatG35/repos'
        )
        const filteredData = data.filter(a => !excludeList.includes(a.name))
        filteredData.sort((a, b) => {
            return Number(new Date(b.created_at)) - Number(new Date(a.created_at))
        })
        filteredData.forEach(a => console.log(a.name))
        setRepos(filteredData)
    }

    useEffect(() => {
        getRepositories()
    }, [])

    return (
        <Box as='section' id='projects' w='100%' py='5em'>
            <Box h='100%' w='90%' margin='0 auto' maxW='1200px'>
                <Center w='100%' h='100%' flexDir='column'>
                    <Heading fontFamily='Nunito' mb='2em'>
                        Projects
                    </Heading>
                    <Grid
                        h='100%'
                        templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
                        gap={8}
                    >
                        {repos?.map(repo => {
                            return (
                                <GridItem
                                    key={repo.id}
                                    rounded='15px'
                                    position='relative'
                                    boxShadow='0 2px 8px #DBDBDB'
                                    border='1px solid #DBDBDB'
                                >
                                    <Img
                                        loading='lazy'
                                        rounded='15px'
                                        objectFit='contain'
                                        src={`/img/repo-img/${repo.name}.png` as any}
                                        alt=''
                                    />
                                </GridItem>
                            )
                        })}
                    </Grid>
                </Center>
            </Box>
        </Box>
    )
}

export default Projects
