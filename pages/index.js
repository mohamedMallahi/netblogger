import BlogCard from '../components/BlogCard';
import { createClient } from 'contentful';

// const CONTENT_API_KEY = '7d75a0c2a8f2a5777783e15bf9';
// const CONTENT_URL = 'https://netblogger.ghost.io';

export default function Home({ posts }) {
	return (
		<>
			<div className='container d-flex flex-column'>
				{posts.map((post, index) => (
					<BlogCard key={post.sys.id} post={post} />
				))}
			</div>
		</>
	);
}
export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});
	const res = await client.getEntries({ content_type: 'posts' });

	return {
		props: {
			posts: res.items,
		},
	};
};
