import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return(
            <div>
                <h3>DASHBOARD</h3>
                <Product />
            </div>
            
        )
    }
}