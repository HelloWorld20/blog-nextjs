import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (field === "date") {
      items[field] = data.date.toString();
    } else if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith(".md"))
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date).getTime() > new Date(post2.date).getTime() ? -1 : 1
    );
  return posts;
}

export function getAllTags() {
  const tags = getAllPosts(["tags"]);
  let result = new Set();
  tags.forEach((tag) => {
    if (Array.isArray(tag.tags)) {
      tag.tags.forEach((item) => {
        result.add(item);
      });
    }
  });

  return Array.from(result);
}

export function getPostByTag(tag: string) {
  return getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    'tags'
  ]).filter(post => post.tags.includes(tag))
}
