import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";
import { getAllTags, getPostByTag } from "@/lib/api";
import Post from "interfaces/post";
import Head from "next/head";

type Props = {
  posts: Post[];
};

export default function TagsList({ posts }: Props) {
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
            coverImage={"/assets/blog/preview/cover.jpg"}
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

export async function getStaticProps(context) {
  const { slug } = context.params;
  const posts = getPostByTag(slug);
  return {
    props: {
      posts: posts || [],
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();
  return {
    paths: tags.map((tag) => `/tags/${tag}`),
    fallback: false,
  };
}
