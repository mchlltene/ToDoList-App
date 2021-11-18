import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);

        //inisilaisasi
        this.state={
            date: new Date()
        }
    }

    componentDidMount(){
        this.myTimer = setInterval (
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
       clearInterval(this.myTimer)
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello, World</h1>
                <h1>It is {this.state.date.toLocaleDateString()}</h1>
            </div>
        )
    }
}

export default Clock