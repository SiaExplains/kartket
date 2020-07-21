import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { ApolloProvider } from '@apollo/react-hooks';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
