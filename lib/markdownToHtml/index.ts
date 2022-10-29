import { remark } from 'remark'
import html from './remark-html'
import remarkImages from './remark-images'
import remarkGfm from 'remark-gfm'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkGfm).use(html).use(remarkImages).process(markdown)
  return result.toString()
}
