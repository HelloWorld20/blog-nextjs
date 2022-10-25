import Container from "@/components/container";
import PostBody from "@/components/post-body";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
// import Header from '@/components/header'
import Layout from "@/components/layout";
import PostHeader from "@/components/post-header";
import PostTitle from "@/components/post-title";
import useHightLight from "@/hooks/use-hightlight";
import type PostType from "@/interfaces/post";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { GALLERY_ITEM_CLASS } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Head from "next/head";

import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  useHightLight();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <div data-pagefind-body>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector={`.${GALLERY_ITEM_CLASS}`}
        >
          <Container>
            {/* <Header /> */}
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article className="mb-32">
                  <Head>
                    <title>{post.title}</title>
                    {/* <meta property="og:image" content={post.ogImage.url} /> */}
                  </Head>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                  />
                  <PostBody content={post.content} />
                </article>
              </>
            )}
          </Container>
        </LightGallery>
      </div>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug", "date", "title"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
