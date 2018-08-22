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
              distance: 5,
            }
          ]
        }
        this.addRun = this.addRun.bind(this);
        this.getRunCount = this.getRunCount.bind(this);
        this.getMileCount = this.getMileCount.bind(this);
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
      return this.state.allRunDays.length;
     }

     getMileCount() {
       let totalMiles = 0;
       for (let i = 0; i < this.state.allRunDays.length; i++) {
         let numMiles = parseInt(this.state.allRunDays[i].distance);
         totalMiles += numMiles;
       }
       console.log("total miles", totalMiles);
       return totalMiles;
     }

    render() {
      return (
        <div className="app">
          <Dashboard getRunCount={this.getRunCount} getMileCount={this.getMileCount}/>
          <AddRun onNewDay={this.addRun}/> 
          <RunHistoryList days={this.state.allRunDays} />
        </div>
      )
    }
 }



export default hot(module)(App);