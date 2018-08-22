import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';

const Dashboard = props => {

  return (
      <div className= "dashboardComponent">
          <h2>Dashboard</h2>
          <p><strong>Total Runs:</strong> {props.getRunCount()}</p>
          <p><strong>Total Miles: </strong>{props.getMileCount()}</p>
          <p><strong>Percent Trail:</strong></p>
          <p><strong>Percent City:</strong></p>
          <p><strong>Percent Indoor:</strong></p>
      </div>
  );
};

export default Dashboard;