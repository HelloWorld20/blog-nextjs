import { getAllPosts } from "@/lib/api";
import { useMemo } from "react";
import Link from "next/link";

const MAX_SIZE = 32;
const MIN_SIZE = 16;

export default function Tags({ tags }) {
  const renderTags = useMemo(() => {
    const tagMap = new Map();
    tags.forEach((tag) => {
      tag.tags.forEach((item) => {
        const pre = tagMap.get(item) || 0;
        tagMap.set(item, pre + 1);
      });
    });

    const countArr = Array.from(tagMap.values());

    const maxCount = Math.max(...countArr);
    const minCount = Math.min(...countArr);

    const ratio = (MAX_SIZE - MIN_SIZE) / (maxCount - minCount);

    let result = [];

    tagMap.forEach((count, tag) => {
      result.push([tag, (count - minCount) * ratio + MIN_SIZE]);
    });

    return result;
  }, [tags]);

  return (
    <div className="max-w-lg mx-auto mt-32">
      <h2 className="p-2 text-4xl">标签</h2>
      {renderTags.map(([tag, fontSize]) => {
        return (
          <Link key={tag} href={`/tags/${tag}`}>
            <a
              className="text-gray-400 p-2 hover:text-gray-600"
              href={`/tags/${tag}`}
              style={{ fontSize }}
            >
              {tag}
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export function getStaticProps() {
  const tags = getAllPosts(["tags"]);
  return {
    props: { tags },
  };
}
