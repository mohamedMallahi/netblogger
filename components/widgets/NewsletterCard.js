const NewsletterCard = () => {
	return (
		<div className='widget-card'>
			<h4>Subscribe To Our Newsletter</h4>
			<form method='POST' action='/thankyou'>
				<input
					className='w-100 mb'
					type='email'
					name='email'
					placeholder='Email Address'
				/>
				<button className='btn w-100'>Subscribe</button>
			</form>
		</div>
	);
};

export default NewsletterCard;
