import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';

// stateless functional component 
const RunHistoryRow = ({location, date, distance}) => (
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
    </tr>
)

export default RunHistoryRow;
