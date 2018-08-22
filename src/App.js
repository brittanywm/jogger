import React, {Component} from 'react'; // Object destructuring
import {hot} from "react-hot-loader";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css'
import Dashboard from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { list: [] } // initialize empty array
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.getRunCount = this.getRunCount.bind(this);
    }

    addTodo(value) {
        const list = this.state.list;
        // const { list } = this.state; <-- object deconstruction
        if (value) {
            list.push(value);
            this.setState({ list: list})
        }
     }

     deleteTodo(id) {
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
            <AddTodo addTodo={this.addTodo}/>
            <TodoList list={this.state.list} deleteTodo={this.deleteTodo} getRunCount={this.getRunCount}/>
        </div>);
    }
 }



export default hot(module)(App);