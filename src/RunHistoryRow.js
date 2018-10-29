import React from 'react';
import AddRun from './AddRun';
 
const RunHistoryRow = ({location, date, distance, terrain}) => (
  <tr>
    <td>
      {location}
    </td>
    <td>
      {date}
      </td>
    <td>
      {distance}
    </td>
    <td>
      {terrain}
    </td>
  </tr>
)

export default RunHistoryRow;
