import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddTodo from './AddTodo';

const Dashboard = props => {
  return (
      <div className= "toDoListComponent">
          <h2>Dashboard</h2>
          <p><strong>Total Runs:</strong> {props.getRunCount()}</p>
          <p><strong>Total Miles:</strong></p>
          <p><strong>Percent Trail:</strong></p>
          <p><strong>Percent City:</strong></p>
          <p><strong>Percent Indoor:</strong></p>
      </div>
  );
};

export default Dashboard;