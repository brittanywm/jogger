import React, {Component} from 'react';

class AddRun extends Component {
    constructor(props) {
        super(props);

        this.state = {val: ''}; // state must always be an object

        this.handleChange = this.handleChange.bind(this); // this in all three cases is React component
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState triggers a re-render. this.state does not!
        this.setState({val: event.target.value}) 
    }

    handleSubmit(event) {
        event.preventDefault(); // need to do this so page won't reload

        // notify App that submission was made so we can tack something on to list
        this.props.addRun(this.state.val);
        //console.log('hi'this.state.val);

        // reset text input back to empty
        this.setState({val: ''});
    }

    render() {
        return (
        <div className= "addRunComponent">
          <h2>Add Run</h2>
          Location:
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.val} onChange={this.handleChange} />
              <input type="submit" value="Add" />
          </form>
        </div>
        );
    }
}

export default AddRun;