import React, {Component} from 'react';
import Product from '../Product/Product';
import './dashboard.css';
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            id:'',
            name:'',
            price:'',
            img:''
        }

        this.deleteProduct= this.deleteProduct.bind(this)
    }

    editProduct(val){
        this.setState({id:val.id, name:val.name, price:val.price, img:val.img})
    }

    deleteProduct(id){
        const idInt =parseInt(id);
        axios.delete(`/api/products/${idInt}`).then((response)=>{
           console.log(response)
           console.log(this.props.getProds())
            this.props.getProds();
        })
    }

    render(){
        const {list} =this.props;
        console.log(list)
        const dispList = list.map((item,index)=>{
            
            return(
            <Product val={item} key={item.id}
                    deleteProduct={this.deleteProduct}
                    currentProdHandle={this.props.currentProdHandle}
                    editProduct(val)
            />
            )
        })
        return(
            <div>
                <h3>DASHBOARD</h3>
                
                {dispList}


            </div>
            
        )
    }
}