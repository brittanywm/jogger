import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddRun from './AddRun';
import { Icon } from 'react-icons-kit'
import {map} from 'react-icons-kit/entypo/map'
import {cone} from 'react-icons-kit/entypo/cone'
import {home} from 'react-icons-kit/entypo/home'


const Dashboard = props => {

  return (
      <div className= "dashboardComponent">
          {/* <h2>Dashboard</h2> */}
          <div className="leftCol">
            <div className="totalRuns">
                <span className="totalRunNum">{props.getRunCount()}</span>
                <br/>
                <span>Total Runs</span>
            </div>
            <div className="totalMiles">
                <span className="totalMileNum">{props.getMileCount()}</span>
                <br/>
                <span>Total Miles</span>
            </div>
          </div>

          <div className="rightCol">
            <div className="percentTrail">
                <span className="totalPercentTrail">{props.getTrailPercent()}%</span>
                <br />
                <span>Trail Runs</span>
                <br />
                <br />
                <Icon size={32} icon={map} />
            </div>
            <div className="percentCity">
                <span className="totalPercentCity">{props.getCityPercent()}%</span>
                <br />
                <span>City Runs</span>
                <br />
                <br />
                <Icon size={32} icon={cone} />
            </div>
            <div className="percentIndoor">
                <span className="totalPercentIndoor">{props.getIndoorPercent()}%</span>
                <br />
                <span>Indoor Runs</span>
                <br />
                <br />
                <Icon size={32} icon={home} />
            </div>
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