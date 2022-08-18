import React from 'react';
import './main.css';

function Section(props) {
	return (
		<>
			<section>
				<h4>{props.titulo}</h4>
				<object className='img_container' id='guante'>
					<img src={props.img} alt='' className='imagen' />
				</object>

				<p className='product'>{props.dProducto}</p>
			</section>
		</>
	);
}
export default Section;
