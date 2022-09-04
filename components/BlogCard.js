import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function BlogCard({ post }) {
	const router = useRouter();

	const { title, slug, thumbnail } = post.fields;

	// console.log(post);

	const goToPost = (slug) => {
		router.push('/post/' + slug);
	};

	const testImg =
		'https://images.pexels.com/photos/12225082/pexels-photo-12225082.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load';

	return (
		<div key={post.id} className='card'>
			<div className='card-image'>
				<Image
					src={'https:' + thumbnail.fields.file.url}
					alt={thumbnail ? thumbnail.alt : title}
					// loading='eager'
					layout='fill'
					// loader={loaderProp}
				/>
			</div>
			<div className='card-body'>
				<Link href={`/post/${slug}`}>
					<h5 style={{ cursor: 'pointer !important' }} className='card-title'>
						{title}
					</h5>
				</Link>
				<p className='card-text'>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<div>
					<button onClick={() => goToPost(slug)} className='btn btn-dark'>
						Read More
					</button>
				</div>
			</div>
			<div className='card-tags'>
				{post.metadata.tags.map((tag) => (
					<span key={tag.sys.id} className='tag'>
						{tag.sys.id}
					</span>
				))}
			</div>
		</div>
	);
}
