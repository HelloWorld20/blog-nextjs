// import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '@/interfaces/author'
import Navigator from './navigator'
import Image from 'next/image'
import getRandomCover from '@/helpers/cover-images/cover'

import cover from '../public/assets/imgs/_cover/2016-03-26_205142-01.jpeg'

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
  const rendomCover = getRandomCover()
  return (
    <section>
      <Navigator />
      <div className="mb-8 md:mb-16 w-screen h-screen max-w-full overflow-hidden z-0">
        <img src={rendomCover.default.src} alt="" className='absolute left-0 top-0 object-cover w-full h-full' />
        <div className='absolute left-0 top-0 w-full h-full overflow-hidden'>
          <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice">
            <polygon opacity="0.7" points="2000,1620 0,1620 0,0 600,0 "></polygon>
          </svg>
        </div>

        <div className="absolute bottom-10 sm:bottom-1/4 sm:left-20 left-10 text-gray-100">
          <div className='text-sm text-gray-200'>
            <DateFormatter dateString={date} />
          </div>
          <h3 className='text-2xl pt-3'>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
      </div>


    </section>
  )
}

export default HeroPost
