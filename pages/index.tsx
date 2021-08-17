import Head from 'next/head'
import Contact from '../components/Contact'
import Landing from '../components/Home'
import Projects from '../components/Projects'

export default function Home() {
    return (
        <>
            <Head>
                <title>Serhat Genç</title>
            </Head>
            <Landing />
            <Projects />
            <Contact />
        </>
    )
}
