import React, { Component } from 'react';
import './App.css';


class App extends Component {
 constructor(props) {
     super(props);
     this.state={
         menu: [],
     };
 }
 
componentDidMount() {
 this.va =  fetch ('https://shielded-shore-34760.herokuapp.com/')
        .then(res => {
         return res.json();
     }).then(data=> {
         this.menu = data.res.map((list)=> {
             return (
                 <div key= {list.res}>
                 <img src= {list.menu} alt="Menu" />
                 </div>
         )
         })
        
       
     })
    }
    
    

     render() {
    return (
      <div className="App">
      <div className="container">
      {this.state.menu}
      {this.va}

      </div>
      </div>
    );
  }

}

export default App;
