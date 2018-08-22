import React, {Component} from 'react';

export const AddRun = ({ location, date, distance, terrain, onNewDay }) => {

    let _location, _date, _distance, _terrain;
    
    const submit = (e) => {

    function getTerrain() {
        var x = document.getElementById("terrain").value;
        return x;
        
    }
    let resultTerrain = getTerrain();
  
      e.preventDefault()
      onNewDay({
        location: _location.value,
        date: _date.value,
        distance: _distance.value,
        terrain: resultTerrain,
      })
      _location.value = '';
      _date.value = '';
      _distance.value = '';
      //_terrain.value = '';
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
        <label htmlFor="distance">Distance (miles)</label>
        <input id="distance" 
              type="distance" 
              required 
              ref={input => _distance = input}/>
        <br />
        <label htmlFor="terrain">Terrain</label>
        <div>
          <select id="terrain">
              <option value="Trail">Trail</option>
              <option value="City">City</option>
              <option value="Indoor">Indoor</option>
          </select>  
        </div>

        <button>Add</button>
      </form>
      </div>
    )
  }

export default AddRun;