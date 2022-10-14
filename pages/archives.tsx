import Timeline from "@/components/timeline";
import { getAllPosts } from "@/lib/api";
import { useMemo } from "react";

export default function Archives({ posts }) {

  const postsDivideByYear = useMemo(() => {
    const result = posts.slice();

    console.log('%c [ posts ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', posts)

    let len = result.length;
    const lastPostData = new Date(result[len - 1].date);
    let lastPostYear = lastPostData.getFullYear();

    // let currentYear = lastPostYear;

    for(let i = len-2; i >= 0; i--) {
      const post = result[i];
      const date = new Date(post.date);
      const year = date.getFullYear();
      if(year !== lastPostYear) {
        // 插入一个
        result.splice(i, 0, {flag: true, year})
        // currentYear = lastPostYear;
        lastPostYear = year;
      }
    }


    console.log('%c [ result ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', result)

    return result;

  }, [posts]);

  const timelineData = useMemo(() => {
    return postsDivideByYear.map(item => {
      if (item.flag) {

      }
    })
  }, [postsDivideByYear])

  return <Timeline />;
}

export function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { posts },
  };
}
