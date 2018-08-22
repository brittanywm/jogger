import React, {Component} from 'react';

export const AddRun = ({ location, date, distance, onNewDay }) => {

    let _location, _date, _distance;
    
    const submit = (e) => {
      e.preventDefault()
      onNewDay({
        location: _location.value,
        date: _date.value,
        distance: _distance.value
      })
      _location.value = '';
      _date.value = '';
      _distance.value = '';
    }
  
    return (
      <div className="addRunComponent">
      <h2>Add Run</h2>
      <form onSubmit={submit} className="add-run-form">
  
        <label htmlFor="location">Location</label>
        <input id="location" 
              type="text" 
              required 
              ref={input => _location = input}/>
        <br />
        <label htmlFor="date">Date</label>
        <input id="date" 
              type="date" 
              required 
              ref={input => _date = input}/>
        <br />
        <label htmlFor="distance">Distance</label>
        <input id="distance" 
              type="distance" 
              required 
              ref={input => _distance = input}/>
  

        <button>Add</button>
      </form>
      </div>
    )
  }

export default AddRun;