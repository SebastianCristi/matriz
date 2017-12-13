import React, { Component } from 'react';
import './App.css';
import Matriz from './componentes/matriz.js';

class App extends Component {

  constructor(){
    super();

    let arr2D = new Array(3).fill(new Array(3).fill(0));

    this.cambiaValor = this.cambiaValor.bind(this);

    this.state = {tamanio: 3,normal: arr2D, inversa: arr2D};
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

        <header className="App-header">
          <h1 className="App-title">Matriz inversa</h1>
        </header>
        <p className="App-intro">
          Mostraremos la matriz inversa a la introducida.
        </p>

        <Matriz datos={this.state.normal} cambiaValor={this.cambiaValor}/>
      </div>
    );
  }


  cambiaValor(value,i,i2){
    let array = this.state.normal;
    let elemento = array[i][i2];
    elemento = value;
    array[i].splice(i2,1,parseInt(elemento));
    console.log(elemento);

     console.log(array);

    this.setState({normal: array});



  }







}

export default App;
