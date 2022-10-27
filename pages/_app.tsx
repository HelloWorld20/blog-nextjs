import Analytics from '@/components/google-analytisc';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from '../store/store';
import '../styles/index.css';
import '../styles/search.css';

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Analytics />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
