import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.State = {
            image_url: '',
            product: '',
            price: 0,
        }
    }

    createNewProduct(body) {
        // const newProduct = {
        //     image_url: this.state.image_url,
        //     product: this.state.product,
        //     price: this.state.price
        // };
        axios.post('/api/product', { body }).then(res => this.setState({ inventoryList: res.data })
        )
    };


    //     .then(res =>{this.props.componentDidMount()})
    // }

    handleImageInput(val) {
        this.setState({ image_url: val })
    }

    handleProductInput(val) {
        this.setState({ product: val })
    }

    handlePriceinput(val) {
        this.setState({ price: val })
    }

    handleCancel() {
        this.setState({
            image_url: '',
            product: '',
            price: 0
        })
    }


    render() {
        return (
            <div>
                <h1>Image URL:</h1>
                <input onChange={e => this.handleImageInput(e.target.value)} type='text' />
                <h1>Product Name:</h1>
                <input onChange={e => this.handleProductInput(e.target.value)} type='text' />
                <h1>Price:</h1>
                <input onChange={e => this.handlePriceInput(e.target.value)} type='text' />
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button>Add To Inventory</button>
            </div>
        )
    }

}

export default Form;