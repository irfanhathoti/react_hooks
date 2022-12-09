import React, { Component } from "react";


class ClassCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increamentCount = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h1>
                    Class Counter
                </h1>
                <p>
                    {
                        this.state.count
                    }
                </p>
                <button onClick={this.increamentCount}>Increament</button>

            </div>
        )
    }
}
export default ClassCounter