// import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Post({ post }) {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	const { title, body } = post.fields;
	const { createdAt } = post.sys;
	const articleComponent = documentToReactComponents(body);

	console.log(post);

	return (
		<div className='container'>
			<Head>
				<title>{title}</title>
			</Head>
			<article>
				<h1 className='text-capitalize'>{title}</h1>
				<strong className='text-muted mb-2 d-block'>
					<Link href={`/user/${'slug'}`}>By Khalid Kashmiri</Link>, Published in
					{new Date(createdAt).toDateString()}
				</strong>
				{articleComponent}
			</article>
		</div>
	);
}

export async function getStaticProps(context) {
	const { items } = await client.getEntries({
		content_type: 'posts',
		'fields.slug[in]': context.params.slug,
	});

	if (!items.length) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			post: items[0],
		},
	};
}

export async function getStaticPaths() {
	const res = await client.getEntries({ content_type: 'posts' });
	const data = res.items;
	console.log();

	return {
		paths: data.map((post) => ({ params: { slug: post.fields.slug } })),
		fallback: true,
	};
}
