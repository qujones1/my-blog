import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Quentin! I make terrible music and videos that I post on{''} <a href="https://sadlilblackboy.com">my other site </a> sometimes. But here you can see how bad I am at building sites!</p>
        <p>
          (build a site like this on{' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
