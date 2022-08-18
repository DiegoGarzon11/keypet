import React from 'react';
import './header.css';
import img from '../../assets/keypet.png';

function Header() {
	return (
		<>
			<header className='header' id='header'>
		
				<div className='container'>
					<img src={img} className='logo' alt='' width='250' height='210' />
					<h1 className='title'> key-Pet</h1>
				</div>
				<nav className='nav'>
					<a href='#contactos'>contactos</a>
					<a href='#productos'>productos</a>
				</nav>
			</header>
		</>
	);
}
export default Header;
