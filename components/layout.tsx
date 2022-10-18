import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { useSelector } from 'react-redux'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const { navExpended } = useSelector<StoreState, appModel>(state => state.app)

  return (
    <div className={navExpended ? 'w-screen h-screen overflow-hidden' : ""}>
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert />}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
