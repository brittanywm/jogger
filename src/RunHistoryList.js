import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';
import RunHistoryRow from './RunHistoryRow'

// stateless functional component 
const RunHistoryList = ({days}) => {
  return (
      <div className="runHistoryComponent">
      <h2>Run History</h2>
          <table>
          
              <thead>
                  <tr>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Distance</th>
                      <th>Terrain</th>
                  </tr>
              </thead>
              <tbody>
                  {days.map((day, i) =>
                      <RunHistoryRow key={i}
                              location={day.location}
                              date={day.date}
                              distance={day.distance}
                              terrain={day.terrain}/> 
                  )}
              </tbody>
          </table>
      </div>
  )
}

export default RunHistoryList;