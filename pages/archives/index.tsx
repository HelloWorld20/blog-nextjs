/**
 * 归档页面
 * @author jianghong.wei
 * @since 2022-10-25 15:15:50
 */

import Container from '@/components/container';
import Layout from '@/components/layout';
import Timeline, { SIZE } from '@/components/timeline';
import { getAllPosts } from '@/lib/api';
import dayjs from 'dayjs';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo } from 'react';
import { posts2timeline } from './helper';

const getItemTitle = (num: number) => ({
  key: num,
  size: SIZE.LG,
  element: <h2 className="text-3xl">归档: {num}篇</h2>,
});

const getItemPost = (time: string, slug: string, title: string) => ({
  key: slug,
  size: SIZE.SM,
  element: (
    <>
      <time className="text-sm text-gray-400">{time}</time>&nbsp;
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline pl-4 text-sm text-blue-500">{title}</a>
      </Link>
    </>
  ),
});

const getItemYear = (year: number) => ({
  key: year,
  size: SIZE.BASE,
  element: <h3 className="text-xl">{year}</h3>,
});

export default function Archives({ timeline }) {
  // 根据数据构造timeline参数
  const timelineElement = useMemo(() => {
    const result = timeline.map(item => {
      if (item.flag) {
        return getItemYear(item.year);
      }

      const time = dayjs(item.date).format('YYYY-MM-DD');
      return getItemPost(time, item.slug, item.title);
    });

    result.unshift(getItemTitle(result.length));

    return result;
  }, [timeline]);

  return (
    <Layout>
      <Head>
        <title>归档</title>
      </Head>
      <Container>
        <section className="flex justify-center">
          <Timeline data={timelineElement} />
        </section>
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  const timeline = posts2timeline(posts);

  return {
    props: { timeline },
  };
}
