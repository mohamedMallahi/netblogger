import Image from 'next/image';
import thankyouImage from '../public/thankyou.png';

export default function AboutPage() {
	return (
		<div className='container'>
			{/* <h1 style={{ textAlign: 'center' }}>Thank You</h1> */}
			<img
				style={{
					width: '300px',
					textAlign: 'center',
					display: 'block',
					margin: '0 auto',
				}}
				src={thankyouImage.src}
				alt='Thank You'
			/>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore
				veritatis, totam corporis nulla aliquam, hic voluptate pariatur ab nihil
				officia minus nam labore quam, sequi nostrum sint fuga eaque?
			</p>
		</div>
	);
}
