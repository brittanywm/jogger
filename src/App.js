import React, {Component} from 'react'; // Object destructuring
import {hot} from "react-hot-loader";
import AddRun from './AddRun';
import RunHistoryList from './RunHistoryList'
import './App.css'
import Dashboard from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          allRunDays: [
            {
              location: "Venice, CA",
              date: "2018-08-22",
              distance: "5k",
            }
          ]
        }
        this.addRun = this.addRun.bind(this);
      }

    addRun(newRun) {
        this.setState({
            allRunDays: [
              ...this.state.allRunDays,
              newRun
            ]
          })
     }

     deleteRun(id) {
        // const list = this.state.list;
        // const results = [...list.slice(0, id), ...list.slice(id + 1)];
        // this.setState({list: results}); // setState triggers render
     }

     getRunCount() {
    //    console.log("Total number of runs", this.state.location.length);
    //    console.log("LOCATION LENGTH", this.state.location.length)
    //    return this.state.location.length;
     }

    render() {
      return (
        <div className="app">
          <Dashboard />
          <AddRun onNewDay={this.addRun}/> 
          <RunHistoryList days={this.state.allRunDays} />
        </div>
      )
    }
 }



export default hot(module)(App);