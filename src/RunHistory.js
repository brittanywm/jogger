import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';

const RunHistory = props => {
    return (
        <div className="runHistoryComponent">
            <h2>Run History</h2>
            {props.list.map((run , i) => { // run is run element in array
                return (<div key={`run${i}`}>
                        {run}
                        <button onClick={() => props.deleteRun(i)}>del</button>
                </div>);
            })}
          
            {/* <p><strong>Total Runs:</strong> {props.getRunCount()}</p> */}

        </div>
    );
};

export default RunHistory;
