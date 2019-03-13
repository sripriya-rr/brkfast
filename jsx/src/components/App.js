import React, { Component } from 'react';import ReactDOM from 'react-dom';
import './App.css';
import Like from './like.js';
import Order from './Order.js'; 
//import createHistory from 'history/createBrowserHistory';
import { BrowserRouter, Switch, Route} from 'react-router-dom';



class App extends Component {
    state = {

        menu: []
    };
  

    async componentDidMount() {
        try {
            const res = await fetch('https://shielded-shore-34760.herokuapp.com/');
            const menu = await res.json();
            this.setState({ menu });

        }
        catch (e) {
            console.log(e);

        }
    }

 


    render() {
        return (
            

            <div>
                <BrowserRouter>
                 <Switch>
                 <Route path='./Order.js' Component={Order} />
                 </Switch>
                </BrowserRouter>
                <p>MENU</p>
                {this.state.menu.map(item => (
                <div key={item.id}>
                    <div key={item.count}>
                        <h1>{item.item}</h1>
                        <h3>{item.price}</h3>
                        <span><img src={item.image} alt="Breakfast"></img> </span>
                        <Like incFunc={this.increment}></Like>
                    </div>
                 </div>
                    
                ))}
                
            </div>  
        );
    }

}

export default App;
