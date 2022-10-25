/**
 * 归档页面
 * @author jianghong.wei
 * @since 2022-10-25 15:15:50
 */

import Timeline, { SIZE } from '@/components/timeline';
import { getAllPosts } from '@/lib/api';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useMemo } from 'react';

function getItemTitle(num: number) {
  return { size: SIZE.LG, element: <h2 className="text-3xl">归档: {num}篇</h2> };
}

function getItemPost(time: string, slug: string) {
  return {
    size: SIZE.SM,
    element: (
      <>
        <time className="text-sm text-gray-400">{time}</time>&nbsp;
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline pl-4 text-sm text-blue-500">{slug}</a>
        </Link>
      </>
    ),
  };
}

function getItemYear(year: number) {
  return {
    size: SIZE.BASE,
    element: <h3 className="text-xl">{year}</h3>,
  };
}

export default function Archives({ posts }) {
  const postsDivideByYear = useMemo(() => {
    const result = posts.slice();

    let len = result.length;
    const lastPostData = new Date(result[len - 1].date);
    let lastPostYear = lastPostData.getFullYear();

    for (let i = len - 2; i >= 0; i--) {
      const post = result[i];
      const date = new Date(post.date);
      const year = date.getFullYear();
      if (year !== lastPostYear) {
        // 插入一个
        result.splice(i + 1, 0, { flag: true, year: lastPostYear });
        lastPostYear = year;
      }
    }

    result.unshift({ flag: true, year: new Date(result[0].date).getFullYear() });

    return result;
  }, [posts]);

  const timelineData = useMemo(() => {
    const result = postsDivideByYear.map(item => {
      if (item.flag) {
        return getItemYear(item.year);
      }
      const time = dayjs(item.date).format('YYYY-MM-DD');
      return getItemPost(time, item.slug);
    });

    result.unshift(getItemTitle(result.length));

    return result;
  }, [postsDivideByYear]);

  return <Timeline data={timelineData} />;
}

export function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { posts },
  };
}
