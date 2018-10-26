import React, { Component } from 'react';
import Product from '../Product/Product'
import './dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`).then(((result)=>{
            console.log(result);
        }))
    }
    render() {
       let inventoryDisplayed = this.props.inventory.map(product => {
            return(
            <div>
                <img src={product.image_url} />
                <h4>{product.product}</h4>
                <h4>{product.price}</h4>
                <button onClick={()=>this.deleteProduct()}>Delete</button>
            </div>
            )
        })
        return (
            <div>
                <div>Dashboard</div>
                <Product inventoryDisplayed={inventoryDisplayed}/>
            </div>
        )
    }

}

export default Dashboard;