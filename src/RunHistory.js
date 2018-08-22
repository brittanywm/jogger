import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';

const RunHistory = props => {
    return (
        <div className="runHistoryComponent">
            <h2>Run History</h2>
            <div><strong>DATA!</strong>
                <div>{props.listLocation[0]} {props.listDate[0]} {props.listDistance[0]}</div>
            </div>

            {/* {props.listLocation.map((location , i) => { // run is run element in array
                return (<div key={`location${i}`}>
                        {location}
                        
                </div>);
            })}

            {props.listDate.map((date , i) => { // run is run element in array
                return (<div key={`date${i}`}>
                        {date}
                </div>);
            })}

            {props.listDistance.map((distance , i) => { // run is run element in array
                return (<div key={`distance${i}`}>
                        {distance}
                        <button onClick={() => props.deleteRun(i)}>del</button>
                </div>);
            })} */}

          
            {/* <p><strong>Total Runs:</strong> {props.getRunCount()}</p> */}

        </div>
    );
};

export default RunHistory;
