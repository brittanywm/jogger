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
              terrain: "City",
            }
          ]
        }
        this.addRun = this.addRun.bind(this);
        this.getRunCount = this.getRunCount.bind(this);
        this.getMileCount = this.getMileCount.bind(this);
        this.getTerrainPercent = this.getTerrainPercent.bind(this);
        this.getTrailPercent = this.getTrailPercent.bind(this);
        this.getCityPercent = this.getCityPercent.bind(this);
        this.getIndoorPercent = this.getIndoorPercent.bind(this);
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

     getTerrainPercent() {
      let runCount = this.state.allRunDays.length;
      let numTrailRuns = 0;
      let numCityRuns = 0;
      let numIndoorRuns= 0;
      let result = [];

      for (let i = 0; i < this.state.allRunDays.length; i++) {
        if (this.state.allRunDays[i].terrain === "Trail") {
          numTrailRuns++;
        } 
        if (this.state.allRunDays[i].terrain === "City") {
          numCityRuns++;
        }
        if (this.state.allRunDays[i].terrain === "Indoor") {
          numIndoorRuns++;
        }
      }

      numTrailRuns = Math.floor((numTrailRuns/runCount) * 100);
      numCityRuns = Math.floor((numCityRuns/runCount) * 100);
      numIndoorRuns = Math.floor((numIndoorRuns/runCount) * 100);

      result.push(numTrailRuns);
      result.push(numCityRuns);
      result.push(numIndoorRuns);

      return result;
     }

     getTrailPercent() {
       let result = this.getTerrainPercent();
       return result[0];
     }

     getCityPercent() {
       let result = this.getTerrainPercent();
       return result[1];
     }

     getIndoorPercent() {
       let result = this.getTerrainPercent();
       return result[2];
     }

     getMileCount() {
       let totalMiles = 0;
       for (let i = 0; i < this.state.allRunDays.length; i++) {
         let numMiles = parseInt(this.state.allRunDays[i].distance);
         totalMiles += numMiles;
       }
       
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
            <Route path="/dashboard" render={() => <Dashboard getRunCount={this.getRunCount} getMileCount={this.getMileCount} getTrailPercent={this.getTrailPercent} getCityPercent={this.getCityPercent} getIndoorPercent={this.getIndoorPercent}/>} />
            <Route path="/add-run" render={()=><AddRun onNewDay={this.addRun}/>}/>
            <Route path="/run-history-list" render={()=><RunHistoryList days={this.state.allRunDays}/>}/>
            
            <div className="navBar">
              <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li className="customMiddleLink"><Link to='/add-run'>Add Run</Link></li>
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