import React, {Component} from 'react';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            input1:'',
            input2:'',
            input3:''
        }
        this.reset=this.reset.bind(this);
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
        this.setState({input1:'', input2:'',input3:''})
    }


    render(){
        return(
            <div>FORM

                <input value={this.state.input1}
                        onChange={(e)=>{this.handleInput1(e.target.value)}}></input>
                <input value={this.state.input2}
                        onChange={(e)=>{this.handleInput2(e.target.value)}}></input>
                <input value={this.state.input3}
                        onChange={(e)=>{this.handleInput3(e.target.value)}}></input>

                <button>Add</button>
                <button onClick={this.reset}>Cancel</button>

            </div>
        )
    }
}