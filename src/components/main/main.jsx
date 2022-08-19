import React from 'react';
import './main.css';

function Section(props) {
	return (
		<>
			<section>
				<h4>{props.titulo}</h4>
				<object className="img_container">
					<div className="imagen" id={props.id} />
				</object>
				<p className="product">{props.dProducto}</p>
			</section>
		</>
	);
}
export default Section;
