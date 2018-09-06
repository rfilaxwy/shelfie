import React, { Component } from 'react';
import axios from 'axios';
export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            img: '',
            currentProdId:null
        }
        this.resetInputs = this.resetInputs.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data.id !== this.props.data.id) {
            this.setState({
                name: this.props.data.name,
                price: this.props.data.price,
                img: this.props.data.img,
            })
        } else{
            const hide = {display:hidden};
            const show ={display:block};
            var addButton = getElementById('addButton').style(hide);
            var updateButton = getElementById('updateButton').style(show);
        }
    }

    createProduct() {
        const name = this.state.name;
        const price = this.state.price;
        const img = this.state.img;
        const newprod = {
            name: name,
            price: price,
            img: img
        };
        if (name.length !== 0 && price.length !== 0 && img.length !== 0) {
            console.log('BOOM')
            axios.post('/api/products', newprod).then((response) => {
                this.props.getProds();
            })
        }
        else {
            console.log('Need to fill all fields')
        }
        this.resetInputs();
    }

    handleInput1(val) {
        this.setState({ name: val })
    }
    handleInput2(val) {
        this.setState({ price: val })
    }
    handleInput3(val) {
        this.setState({ img: val })
    }

    resetInputs() {
        this.setState({ name: '', price: '', img: '' })
    }



    render() {

        return (
            <div>FORM

                <input value={this.state.name}
                    onChange={(e) => { this.handleInput1(e.target.value) }}></input>
                <input value={this.state.price}
                    onChange={(e) => { this.handleInput2(e.target.value) }}></input>
                <input value={this.state.img}
                    onChange={(e) => { this.handleInput3(e.target.value) }}></input>

                <button id='addButton' onClick={this.createProduct}>Add</button>
                <button id='updateButton' onClick={this.updateProduct}>Update</button>
                <button onClick={this.reset}>Cancel</button>

            </div>
        )
    }
}