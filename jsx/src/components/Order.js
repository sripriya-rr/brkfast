import React, { Component } from 'react';
class Order extends Component {
    state = {

        Order
    };


    async componentDidMount() {
        try {
            const res = await fetch('https://shielded-shore-34760.herokuapp.com/order');
            const Order= await res.json();
            this.setState({ Order });

        }
        catch (e) {
            console.log(e);

        }
    }

    render() {
        return (

            <div>
                <p>Order</p>
                {this.state.Order.map(Order => (
                    <div>
                        <h1>{Order.item}</h1>
                        <h3>{Order.price}</h3>
                        
                    </div>
                ))}
            </div>
        );
    }

}

export default Order;