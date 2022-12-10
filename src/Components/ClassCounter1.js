import React, { Component } from "react";


class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ""
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    // conditionally updating the title
    componentDidUpdate(preProps, preState) {
        if (preState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} times`
            console.log("Updated title...")
            console.log(preState)
        }
    }
    increamentCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

                <button onClick={this.increamentCount}>Count:{this.state.count}</button>

            </div>
        )
    }
}

export default ClassCounter1