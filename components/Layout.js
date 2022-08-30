import React from 'react';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import NewsletterCard from './NewsletterCard';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='container splite'>
				<div className='main'>{children}</div>
				<aside className='sidebar'>
					<ProfileCard />
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
