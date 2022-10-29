import { getCollectPost } from '@/lib/api';
import Container from '@/components/container';
import Layout from '@/components/layout';
import Head from 'next/head';
import PostBody from '@/components/post-body';
import markdownToHtml from '@/lib/markdownToHtml';

export default function Collect({ content }) {
  return (
    <Layout>
      <Head>
        <title>收藏</title>
      </Head>
      <Container>
        <div className="mt-20">
          <PostBody content={content}></PostBody>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  let content = await getCollectPost();
  content = await markdownToHtml(content || '');
  return {
    props: { content },
  };
}
