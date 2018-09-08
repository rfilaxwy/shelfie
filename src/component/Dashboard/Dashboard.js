import React, {Component} from 'react';
import Product from '../Product/Product';
import './dashboard.css';
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            prodList:[],
            id:'',
            name:'',
            price:null,
            img:''
        }

        this.deleteProduct= this.deleteProduct.bind(this);
        this.currentProdHandle= this.currentProdHandle.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }
    componentDidMount(){
        axios.get('/api/inventory').then(response=>{
          console.log(response.data)
          this.setState({prodList:response.data})
        })
    
      }
    editProduct(val){
        this.setState({id:val.id, name:val.name, price:val.price, img:val.img})
    }

    handleNameChange(val){
        this.setState({name:val})
    }
    handlePriceChange(val){
        console.log(val)
        const price = parseInt(val);
        this.setState({price:val})
    }
    handleImgChange(val){
        this.setState({img:val})
    }

    deleteProduct(id){
        axios.delete(`/api/products/${id}`).then((response)=>{
           console.log(response)
           console.log(this.props.getProds())
            this.props.getProds();
        })
    }

    updateProduct(id){
        const body = {name:this.state.name, price:this.state.price, img:this.state.img};
        debugger
        console.log(body)
            axios.put(`/api/products/${id}`,body).then((response)=>{
            debugger
                console.log(response)
            this.props.getProds();
        })
    }

    currentProdHandle(val){
        const proLis =this.state.prodList;
        for(let i=0;i<proLis.length; i++){
            console.log(proLis[i]['price'])
            if(val.id==proLis[i]['id']){
                this.setState({id:proLis[i]['id'],name:proLis[i]['name'],price:proLis[i]['price'],img:proLis[i]['img']})
            }
        }
            
      }

    render(){
        const {list} =this.props;
        
        const dispList = list.map((item,index)=>{
            
            return(
            <Product val={item} key={item.id}
                    deleteProduct={this.deleteProduct}
                    currentProdHandle={this.currentProdHandle}
                    editProcuct={this.editProduct}
                    updateProduct={this.updateProduct}

            />
            )
        })
        return(
            <div>
                <h3>DASHBOARD</h3>
            <div className='productDisplay'>
                
               
                    <div>{dispList}</div>

                    <div className='productCard'>
                        <div></div>
                        <div>
                            <h5>Image URL:</h5>
                            <input placeholder='Img URL' onChange={(e)=>{this.handleImgChange(e.target.val)}} value={this.state.img}></input></div>
                        <div>
                            <h5>Product Name:</h5>
                            <input placeholder='Product Name' onChange={(e)=>{this.handleNameChange(e.target.val)}} value={this.state.name}></input></div>
                        <div>
                            <h5>Price:</h5>
                            <input placeholder='Product Price' onChange={(e)=>{this.handlePriceChange(e.target.value)}} value={this.state.price}></input>
                        </div>
                    
                        <button onClick={()=>{this.updateProduct(this.state.id)}}>Update</button>
                    </div>
                
                    </div>
            </div>
        )
    }
}