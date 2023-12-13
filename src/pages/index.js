import Events from '@/components/home/Events'
import Head from 'next/head'
import Coursecategories from '../components/home/Coursecategories'
import Topcourses from '../components/home/Topcourses'
import Homebanner from '@/components/banners/Homebanner'
export default function Home() {
    return (
        <>
            <Head>
                <title>nextjs project</title>
            </Head>
            <div className="rbt-main-wrapper">
                <Homebanner />
                <Coursecategories />
                <Topcourses />
                <Events />
            </div>
        </>
    )
}