/**
 * post转timeline的数据
 * @param posts
 * @returns
 */
export function posts2timeline(posts: any[]) {
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
}
