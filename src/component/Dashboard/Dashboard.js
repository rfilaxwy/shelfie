import React, {Component} from 'react';
import Product from '../Product/Product';
import './dashboard.css';


export default class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {list} =this.props;
        const dispList = list.map((item,index)=>{
            return(
            <Product val={item} key={index} />
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