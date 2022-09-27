// import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import Hitokoto from './hitokoto'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className='absolute top-10 right-10 z-10 text-xs'>
        <div className='absolute right-10 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100'>
          <i className='iconfont icon-search' style={{ lineHeight: '22px' }}></i>
        </div>
        <div className='absolute right-0 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100'>
          <i className='iconfont icon-menu' style={{ lineHeight: '22px' }}></i>
        </div>
      </div>

      <div className='w-screen h-screen bg-gray-50 bg-opacity-25'>
        <div className='absolute top-10 right-10 z-20 text-xs'>
          <div className='absolute right-10 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100'>
            <i className='iconfont icon-search' style={{ lineHeight: '22px' }}></i>
          </div>
          <div className='absolute right-0 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100'>
            <i className='iconfont icon-close' style={{ lineHeight: '22px' }}></i>
          </div>
        </div>
        <ul className='pt-36 flex justify-center text-lg text-gray-500 space-x-8'>
          {
            ['首页', '标签', '归档', '收藏', '关于'].map(name => (<li key={name}>
              <a className="cursor-pointer hover:text-gray-800">{name}</a>
            </li>))
          }
        </ul>
        <div className='text-center text-sm text-gray-400 mt-20'>
          <Hitokoto />
        </div>

      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-14 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
