import Blogs from 'components/Blogs'
import Contact from 'components/Contact'
import Landing from 'components/Landing'
import Projects from 'components/Projects'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Serhat Genç</title>
            </Head>
            <Landing />
            <Projects />
            <Blogs />
            <Contact />
        </>
    )
}
