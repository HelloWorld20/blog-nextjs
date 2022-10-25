import Container from '@/components/container';
import HeroPost from '@/components/hero-post';
import Layout from '@/components/layout';
import MoreStories from '@/components/more-stories';
import { getAllPosts } from '@/lib/api';
import Post from 'interfaces/post';
import Head from 'next/head';

type Props = {
  posts: Post[];
};

export default function Index({ posts }: Props) {
  const [heroPost, ...morePosts] = posts;
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
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { posts },
  };
};
