const NewsletterCard = () => {
	return (
		<div className='newsletter-card'>
			<h4>Subscribe To Our Newsletter</h4>
			<form method='POST' action='/thankyou'>
				<input
					className='form-control'
					type='email'
					name='email'
					placeholder='Email Address'
				/>
				<button className='btn'>Subscribe</button>
			</form>
		</div>
	);
};

export default NewsletterCard;
