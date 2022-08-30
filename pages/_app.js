import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<>
			<Head>
				<title>Reactor CMS</title>
				<meta
					name='description'
					content='Reactor CMS is a minimalist content management system'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default App;
