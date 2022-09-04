import React from 'react';
import Navbar from './Navbar';
import ProfileCard from './widgets/ProfileCard';
import SocialMedia from './widgets/SocialMediaCard';
import NewsletterCard from './widgets/NewsletterCard';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='container splite'>
				<div className='main'>{children}</div>
				<aside className='sidebar'>
					<ProfileCard />
					<SocialMedia />
					<NewsletterCard />
				</aside>
			</main>
			<footer className='footer'>
				<span className='text-muted'>&copy; 2021 Reactor CMS, Inc</span>
			</footer>
		</>
	);
};

export default Layout;
