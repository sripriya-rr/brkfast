import React, { Component } from 'react';
import './App.css';



class App extends Component {
 state = {
     
         menu: []
     };
 
 
async componentDidMount() {
    try {
        const res = await  fetch ('https://shielded-shore-34760.herokuapp.com/');
        const menu = await res.json();
        this.setState({menu});

    }
    catch (e) {
        console.log(e);

    }
}
    
  render() {
    return (
      <div>
      {this.state.menu.map(item => (
      <div key = {item.price}>
      <h1>{item.item}</h1>
      <h3>{item.price}</h3>
      <span><img src = {item.image}></img> </span>
       </div>
      ))}
      </div>
    );
  }

}

export default App;
