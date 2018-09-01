import React, {Component} from 'react';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            input1:'',
            input2:'',
            input3:''
        }
    }
    
    handleInput1(val){
        this.setState({input1:val})
    }
    handleInput2(val){
        this.setState({input2:val})
    }
    handleInput3(val){
        this.setState({input3:val})
    }

    reset(){
        this.setState()
    }


    render(){
        return(
            <div>FORM

                <input value={this.state.input1}
                        onChange={(e)=>{this.handleInput1(e.target.value)}}></input>
                <input value={this.state.input2}></input>
                <input value={this.state.input3}></input>

                <button>Add</button>
                <button>Cancel</button>

            </div>
        )
    }
}