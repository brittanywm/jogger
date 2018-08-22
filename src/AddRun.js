import React, {Component} from 'react';

class AddRun extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valLocation: '',
            valDate: '',
            valDistance: '',

        }; // state must always be an object

        this.handleChangeLocation = this.handleChangeLocation.bind(this); // this in all three cases is React component
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeDistance = this.handleChangeDistance.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLocation(event) {
        // this.setState triggers a re-render. this.state does not!
        this.setState({valLocation: event.target.value}) 
    }

    handleChangeDate(event) {
        // this.setState triggers a re-render. this.state does not!
        this.setState({valDate: event.target.value}) 
    }

    handleChangeDistance(event) {
        // this.setState triggers a re-render. this.state does not!
        this.setState({valDistance: event.target.value}) 
    }

    handleSubmit(event) {
        event.preventDefault(); // need to do this so page won't reload

        // notify App that submission was made so we can tack something on to list
        this.props.addRun(this.state.valLocation, this.state.valDate, this.state.valDistance);
        // this.props.addRun(this.state.valDate);
        // this.props.addRun(this.state.valDistance);
        //console.log('hi'this.state.val);

        // reset text input back to empty
        this.setState({valLocation: ''});
        this.setState({valDate: ''});
        this.setState({valDistance: ''});
    }

    render() {
        return (
        <div className= "addRunComponent">
          <h2>Add Run</h2>
          
          <form onSubmit={this.handleSubmit}>
              Location:
              <input type="text" value={this.state.valLocation} onChange={this.handleChangeLocation} />

              Date:
              <input type="text" value={this.state.valDate} onChange={this.handleChangeDate} />

              Distance:
              <input type="text" value={this.state.valDistance} onChange={this.handleChangeDistance} />
            
              <br/>
              <input type="submit" value="Add" />
          </form>
        </div>
        );
    }
}

export default AddRun;