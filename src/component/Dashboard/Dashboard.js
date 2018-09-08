import React, {Component} from 'react';
import Product from '../Product/Product';
import './dashboard.css';
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            prodList:[],
            id:0,
            name:'',
            price:null,
            img:''
        }

        this.deleteProduct= this.deleteProduct.bind(this);
        this.currentProdHandle= this.currentProdHandle.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.resetInputs =this.resetInputs.bind(this);
        this.handleImgChange =this.handleImgChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
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
        console.log(val)
        this.setState({name:val})
    }
    handlePriceChange(val){
        console.log(val)
        const price = parseInt(val);
        this.setState({price:val})
    }
    handleImgChange(val){
        console.log(val)
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
        const name = this.state.name;
        const price = this.state.price;
        const img = this.state.img;
        const newprod = {
            name: name,
            price: price,
            img: img,
            
        };
        debugger
        if(this.state.id==0){
            axios.post('/api/products', newprod).then((response) => {
                this.props.getProds();});
        } else{
            axios.put(`/api/products/${id}`,newprod).then((response)=>{
                debugger
                    console.log(response)
                this.props.getProds();
            })
        }
            this.resetInputs();
        
    }

    currentProdHandle(val){
        const proLis =this.state.prodList;
        for(let i=0;i<proLis.length; i++){
            if(val.id===proLis[i]['id']){
                this.setState({id:proLis[i]['id'],name:proLis[i]['name'],price:proLis[i]['price'],img:proLis[i]['img']})
            }
        }
            
      }

      resetInputs() {
        this.setState({id:0, name:'', price:'', img:'' })
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
                            <input value={this.state.img} placeholder='Img URL' onChange={(e)=>{this.handleImgChange(e.target.value)}}></input></div>
                        <div>
                            <h5>Product Name:</h5>
                            <input value={this.state.name} placeholder='Product Name' onChange={(e)=>{this.handleNameChange(e.target.value)}}></input></div>
                        <div>
                            <h5>Price:</h5>
                            <input value={this.state.price} placeholder='Product Price' onChange={(e)=>{this.handlePriceChange(e.target.value)}}></input>
                        </div>
                        <button onClick={this.resetInputs}>Clear</button>
                        <button onClick={()=>{this.updateProduct(this.state.id)}}>Update/Add</button>
                    </div>
                
                    </div>
            </div>
        )
    }
}