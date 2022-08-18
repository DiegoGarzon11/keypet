import ReactDOM from 'react-dom/client';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import Section from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';

//imagenes
import guante from './assets/guantemilo.png';
import botella from './assets/multiusosmilo.png';
import bolsas from './assets/bolsasmilo.png';
import plato from './assets/platomilo.png';
import cepillo from './assets/cepillosolo.png';

//imagenes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<main>
			<div className='description'>
				<h1>¿Quienes Somos?</h1>
						<hr />
				<p>
					Somos una empresa colombiana que se encarga de la venta de productos para mascotas para
					mejorar su estilo de vida y faciitar algunas de sus necesidades.
				</p>
		
			</div>
			<div id='productos'>
				<Section
					titulo='guates'
					dProducto='guante de cepillo de limpieza para perros y gatos de malla transpirable multifuncional personalizado'
					img={guante}
				/>
				<Section
					titulo='Botella multiusos'
					dProducto='botella multiusos 4 opciones en uno para tus mascotas portable, sin fugas, dispensador de agua perfecta para tus viajes, salidas al medio ambiente, acampar y senderismo, viajes.'
					img={botella}
				/>
				<Section
					titulo='Bolsas'
					dProducto='dispensador de bolsa para excrementos de perro biodegradable personalizado, bolsa de limpieza, soporte para bolsa de basura para tus mascotas.'
					img={bolsas}
				/>
				<Section
					titulo='Tazon'
					dProducto='tazón plegable portátil para tus mascotas con 1 mosquetones para paseos, estacionamiento y viajes, para agua y comida.'
					img={plato}
				/>
				<Section
					titulo='Cepillo'
					dProducto='cepillo suave para el baño de tus mascotas, una agradable textura para masajear para tu perro y gatos.'
					img={cepillo}
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
