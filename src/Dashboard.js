import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';

const Dashboard = props => {

  return (
      <div className= "dashboardComponent">
          <h2>Dashboard</h2>
          <div className="leftCol">
            <div className="totalRuns">
            </div>
            <div className="totalMiles">
            </div>
          </div>

          <div className="rightCol">

          </div>

          {/* <p><strong>Total Runs:</strong> {props.getRunCount()}</p>
          <p><strong>Total Miles: </strong>{props.getMileCount()}</p>
          <p><strong>Percent Trail: </strong>{props.getTrailPercent()}%</p>
          <p><strong>Percent City: </strong>{props.getCityPercent()}%</p>
          <p><strong>Percent Indoor: </strong>{props.getIndoorPercent()}%</p> */}
      </div>
  );
};

export default Dashboard;