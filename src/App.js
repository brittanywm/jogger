import React, {Component} from 'react'; // Object destructuring
import {hot} from "react-hot-loader";
import AddRun from './AddRun';
import RunHistory from './RunHistory';
import './App.css'
import Dashboard from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { list: [] } // initialize empty array
        this.addRun = this.addRun.bind(this);
        this.deleteRun = this.deleteRun.bind(this);
        this.getRunCount = this.getRunCount.bind(this);
    }

    addRun(value) {
        const list = this.state.list;
        // const { list } = this.state; <-- object deconstruction
        if (value) {
            list.push(value);
            this.setState({ list: list})
        }
     }

     deleteRun(id) {
        const list = this.state.list;
        const results = [...list.slice(0, id), ...list.slice(id + 1)];
        this.setState({list: results}); // setState triggers render
     }

     getRunCount() {
       console.log("Total number of runs", this.state.list.length);
       return this.state.list.length;
     }

    render() {
        return (<div>
            <Dashboard getRunCount={this.getRunCount}/>
            <AddRun addRun={this.addRun}/>
            <RunHistory list={this.state.list} deleteRun={this.deleteRun} getRunCount={this.getRunCount}/>
        </div>);
    }
 }



export default hot(module)(App);