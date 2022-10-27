import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'
import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      {/* <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      /> */}
      {/* <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      /> */}
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗿</text></svg>"></link>
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta name="keywords" content="Leon's personal blog" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
