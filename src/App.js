import React, {Component} from 'react'; // Object destructuring
import {hot} from "react-hot-loader";
import './App.css'
import Menu from './Menu'
import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import AddRun from './AddRun';
import RunHistoryList from './RunHistoryList'



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
        <div className="appHouse">
        <Router history={hashHistory}>
          <div>
            <div className="Logo">
              <h2>Jogger</h2>
            </div>
            <Route path="/dashboard" render={() => <Dashboard getRunCount={this.getRunCount} getMileCount={this.getMileCount}/>} />
            <Route path="/add-run" render={()=><AddRun onNewDay={this.addRun}/>}/>
            <Route path="/run-history-list" render={()=><RunHistoryList days={this.state.allRunDays}/>}/>
            
            <div className="navBar">
              <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/add-run'>Add Run</Link></li>
                <li><Link to='/run-history-list'>Run History</Link></li>
              </ul>
            </div>
          </div>
        </Router>
      
        </div>
       
    
        
          // <div className="app">
          //   <h2>Jogger</h2>
          //   <Menu />
          //   <Dashboard getRunCount={this.getRunCount} getMileCount={this.getMileCount}/>
          //   <AddRun onNewDay={this.addRun}/> 
          //   <RunHistoryList days={this.state.allRunDays} />
          // </div>
      )
    }
 }



export default hot(module)(App);