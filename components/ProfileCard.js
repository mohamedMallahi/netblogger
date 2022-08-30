const ProfileCard = () => {
	return (
		<div className='profile-card'>
			<img
				className='rounded-circle'
				style={{ width: '100px', height: '100px', objectFit: 'cover' }}
				src='../profile.webp'
				alt=''
			/>
			<h4 className='mt-2'>Mohamed Mallahi</h4>
			<p>
				Sunt Aut Facere Repellat Provident Occaecati Excepturi Optio
				Reprehenderit
			</p>
		</div>
	);
};

export default ProfileCard;
