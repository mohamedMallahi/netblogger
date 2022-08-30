import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [showMenu, setShowMenu] = useState('');

	return (
		<nav className='navbar'>
			<div className='container'>
				<Link href='/'>
					<a className='navbar-brand'>Reactor CMS</a>
				</Link>
				<ul className='navbar-menu'>
					<li>
						<Link href='/about'>
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
