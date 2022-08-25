import React from 'react';
import './header.css';
import img from '../../assets/keypet.png';


function Header() {
	return (
		<>
			<header className='header' id='header'>
				<div className='container'>
					<img src={img} className='logo' alt='' width='270' height='260' />
					<h1 className='title'> key-Pet</h1>
				</div>
				<nav className='nav'>
					
					<a href='#contactos'>contactos</a>
					<a href='#productos'> Producto</a>
					<a href='https://listado.mercadolibre.com.co/animales-mascotas/perros/keypet_OrderId_PRICE_NoIndex_True' target= "_blank" rel='noreferrer'>
						Comprar
					</a>

				</nav>
			</header>
			<hr />
		</>
	);
}
export default Header;
