import React from 'react';
import './footer.css';

function Footer() {
	let año = new Date().getFullYear();
	return (
		<>
			<footer>
				<h3 className='title-contactos'>contactanos</h3>
				<div id='contactos'>
					<a
						href='https://api.whatsapp.com/send?phone=573102986082&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto'
						rel='noreferrer'
						target='_blank'>
						Whatsapp
					</a>
					<br />
					<a href='https://www.instagram.com/keypetcol' target='_blank' rel='noreferrer'>
						Instagram
					</a>
					<option value=' correo'>keypetcol@gmail.com</option>
				</div>
				<div className='copy'>
					<p>
						Made with 💟 &copy; by{' '}
						<a href='https://diegogarzon.netlify.app' target='_blank' rel='noreferrer'>
							Diego Garzon{' '}
						</a>
						<b>COLOMBIA </b>
						{año}
					</p>

					<button className='inicio'>
						<a href='#header'>ir a inicio</a>
					</button>
				</div>
			</footer>
		</>
	);
}
export default Footer;
