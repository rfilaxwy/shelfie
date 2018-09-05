import React, {Component} from 'react';
import Product from '../Product/Product';
import './dashboard.css';
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`).then((response)=>{
            this.props.getProds();
        })
    }

    render(){
        const {list} =this.props;
        const dispList = list.map((item,index)=>{
            
            return(
            <Product val={item} key={item.id}
                    deleteProduct={this.deleteProduct}
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