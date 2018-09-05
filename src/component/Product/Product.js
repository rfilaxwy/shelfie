import React from 'react';

export default function Product(props){
        
        return( 
            
            <div className='card' id={props.val.id} >
                <p>Product</p>
                <img src={props.val.image} alt={props.val.name}></img>
                <p>{props.val.name}</p>
                <p>Price:{props.val.price}</p>
                <div>
                    <button onClick={()=>{props.deleteProduct(props.val.id)}}>Delete</button>
                    <button>Update</button>
                </div>
            </div>
        )

}