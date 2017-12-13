import React, { Component } from 'react';

class Matriz extends Component {
	constructor(props){
		super(props);


	}

	render(){

		return (
			<div>
				{this.props.datos.map((filas,index) => (
					<div key={index}>
					{filas.map((numero, index2) => (
		        		<input type="number" key={index2} 
		        		onChange={event => this.props.cambiaValor(event.target.value, index,index2)}
		        		value={numero}
		        		style={{width: '60px'}}
		        		/>

		   			 ))}
					</div>
  				))}


			</div>
		);

	}
}

export default Matriz;