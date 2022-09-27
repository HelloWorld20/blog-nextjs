import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
