import React from 'react';
import './main.css';

function Section({titulo, dProducto, id}) {
	return (
		<>
			<section>
				<h4>{titulo}</h4>
				<object className="img_container">
					<div className="imagen" id={id}/>
				</object>
				<p className="product">{dProducto}</p>
			</section>
		</>
	);
}
export default Section;
