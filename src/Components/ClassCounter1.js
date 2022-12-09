import React, { Component } from "react";


class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(preProps, preState) {
        document.title = `Clicked ${this.state.count} times`
    }
    increamentCount = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        return (
            <div>

                <button onClick={this.increamentCount}>Count:{this.state.count}</button>

            </div>
        )
    }
}

export default ClassCounter1