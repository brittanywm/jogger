import React, {Component} from 'react'; // Object destructuring
import {hot} from "react-hot-loader";
import AddRun from './AddRun';
import RunHistory from './RunHistory';
import './App.css'
import Dashboard from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props);

        //this.state = { list: [] } // initialize empty array

        this.state = {
            location: [],
            date: [], 
            distance: [],
        }

        this.addRun = this.addRun.bind(this);
        this.deleteRun = this.deleteRun.bind(this);
        this.getRunCount = this.getRunCount.bind(this);
    }

    addRun(...value) {
        //const list = this.state.list;
        // const { list } = this.state; <-- object deconstruction

        // const datePlachold = this.state.date;
        // const locationPlacehold = this.state.location;
        // if (location) {
        //     locationPlacehold.push(location);
        //     this.setState({ location: location})
        // }

        const locationArr = this.state.location;
        const dateArr = this.state.date;
        const distanceArr = this.state.distance;

        locationArr.push(value[0]);
        dateArr.push(value[1]);
        distanceArr.push(value[2]);

        this.setState({dateArr: dateArr});
        this.setState({locationArr: locationArr});
        this.setState({distanceArr: distanceArr});
     }

     deleteRun(id) {
        const list = this.state.list;
        const results = [...list.slice(0, id), ...list.slice(id + 1)];
        this.setState({list: results}); // setState triggers render
     }

     getRunCount() {
       console.log("Total number of runs", this.state.location.length);
       console.log("LOCATION LENGTH", this.state.location.length)
       return this.state.location.length;
     }

    render() {
        return (<div>
            <Dashboard getRunCount={this.getRunCount}/>
            <AddRun addRun={this.addRun}/>
            <RunHistory listLocation={this.state.location} listDate={this.state.date} listDistance={this.state.distance} deleteRun={this.deleteRun} getRunCount={this.getRunCount}/>
            {console.log("THIS.STATE.DATE", this.state.date)}
            {/* <RunHistory listDate={this.state.date} listLocation={this.state.location} deleteRun={this.deleteRun} getRunCount={this.getRunCount}/> */}
        </div>);
    }
 }



export default hot(module)(App);