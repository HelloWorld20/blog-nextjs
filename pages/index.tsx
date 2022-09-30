import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Layout from '@/components/layout'
import { getAllPosts } from '@/lib/api'
import Head from 'next/head'
import Post from 'interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const [heroPost, ...morePosts] = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>Leon's Blog</title>
        </Head>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            // coverImage={heroPost.coverImage}
            coverImage={'/assets/blog/preview/cover.jpg'}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <Container>
          {/* <Intro /> */}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
