
import './Dashboard.css'
import DashboardLeft from '../../components/DashboardLeft/DashboardLeft'
import DashboardRight from '../../components/DashboardRight/DashboardRight'

const Dashboard = () => {

  return (
    <div>
        <div className="dashboard-container">
          <div className="dashboard-left">
              <DashboardLeft used={25}/>
          </div>
          <div className="dashboard-right">
              <DashboardRight />
          </div>
        </div>
      
    </div>
  )
}

export default Dashboard
