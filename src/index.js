import ReactDOM from 'react-dom/client';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import Section from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<main>
			<div className='description'>
				<h1>¿Que es key-pet?</h1>
				<hr />
				<p>
					Somos una empresa que ofrece un servicio de venta de accesorios de alta calidad,
					funcionalidad y comodidad para el cuidado y protección de nuestros peludos, así mismo, la
					adquisición de nuestros productos se hace de manera ágil y fácil a través de diferentes
					canales de e-commerce, usando medios de pagos seguros y ágiles.
				</p>
			</div>
			<div id='productos'>
				<Section
					titulo='Guantes'
					dProducto='guante de cepillo de limpieza para perros y gatos de malla transpirable multifuncional personalizado'
					id='guante'
				/>
				<Section
					titulo='Botella multiusos'
					dProducto='botella multiusos 4 opciones en uno para tus mascotas portable, sin fugas, dispensador de agua perfecta para tus viajes, salidas al medio ambiente, acampar y senderismo, viajes.'
					id='botella'
				/>
				<Section
					titulo='Bolsas'
					dProducto='dispensador de bolsa para excrementos de perro biodegradable personalizado, bolsa de limpieza, soporte para bolsa de basura para tus mascotas.'
					id='bolsas'
				/>
				<Section
					titulo='Tazon portable'
					dProducto='tazón plegable portátil para tus mascotas con 1 mosquetones para paseos, estacionamiento y viajes, para agua y comida.'
					id='platon'
				/>
				<Section
					titulo='Cepillo'
					dProducto='cepillo suave para el baño de tus mascotas, una agradable textura para masajear para tu perro y gatos.'
					id='cepillo'
				/>
			</div>
		</main>
		<Footer />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
