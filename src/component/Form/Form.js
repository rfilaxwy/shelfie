import React, { Component } from 'react';
import axios from 'axios';
export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            img: '',
            currentProdId:null,
            editing:false
        }
        this.resetInputs = this.resetInputs.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentProd !== this.props.currentProd) {
            this.setState({
                name: this.props.data.name,
                price: this.props.data.price,
                img: this.props.data.img,
            })
        } 
        
    }

    buttonToggle(){
        const add= document.getElementById('addButton');
        const update = document.getElementById('updateButton');
        
        if(this.state.editing){
            add.style.display='none'
            update.style.display='none'
        } else{
            add.style.display='block'
            update.style.display='none'
        }
    }

    createProduct() {
        const name = this.state.name;
        const price = this.state.price;
        const img = this.state.img;
        
        const newprod = {
            name: name,
            price: price,
            img: img,
            
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

                <input placeholder='Product Name' value={this.state.name}
                    onChange={(e) => { this.handleInput1(e.target.value) }}></input>
                <input placeholder='Product Price' value={this.state.price}
                    onChange={(e) => { this.handleInput2(e.target.value) }}></input>
                <input placeholder='Img URL'value={this.state.img}
                    onChange={(e) => { this.handleInput3(e.target.value) }}></input>

                <button  onClick={this.createProduct}>Add</button>
                <button  onClick={this.updateProduct}>Save Changes</button>
                <button onClick={this.reset}>Cancel</button>

            </div>
        )
    }
}