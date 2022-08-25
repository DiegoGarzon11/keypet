import React from 'react';
import Section from '../main/Section';
import Header from '../header/header';
import Footer from '../footer/footer';
import Title from '../Title/Title';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<Title />
				<main id='productos'>
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
				</main>
	
			<Footer />
		</>
	);
}
export default App;
