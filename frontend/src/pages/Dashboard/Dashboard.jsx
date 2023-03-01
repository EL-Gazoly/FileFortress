
import './Dashboard.css'
import DashboardLeft from '../../components/DashboardLeft'


const Dashboard = () => {

  return (
    <div>
        <div className="dashboard-container">
          <div className="dashboard-left">
              <DashboardLeft used={25}/>
          </div>
          <div className="dashboard-right"></div>
        </div>
      
    </div>
  )
}

export default Dashboard
