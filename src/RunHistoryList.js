import React from 'react';
import AddRun from './AddRun';
import RunHistoryRow from './RunHistoryRow'

const RunHistoryList = ({days}) => {
  return (
    <div className="runHistoryComponent">
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Date</th>
            <th>Distance (miles)</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, i) =>
            <RunHistoryRow
              key={i}
              location={day.location}
              date={day.date}
              distance={day.distance}
              terrain={day.terrain}/> 
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RunHistoryList;