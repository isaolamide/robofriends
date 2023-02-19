import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchField:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(datas=> this.setState({robots: datas}));
    }

    onSearhChange=(event)=>{
        this.setState({searchField: event.target.value})
    }
    render(){
        const filteredrobot= this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
        <div className="tc">
        <h1 className="F1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearhChange}/>
        <CardList className="scro" robots={filteredrobot}/>
    </div>
);
    }
}
export default App;