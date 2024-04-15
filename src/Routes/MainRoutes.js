import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users'
import Customer from '../pages/Schedule'
import Training from '../pages/Training'
import AssessmentDetails from '../pages/AssessmentDetails'
import AssessmentReport from '../pages/AssessmentReport'
import Home from '../pages/Home'
import Notification from '../pages/Notification'
import Assessment from '../pages/Assessment'
import Schedule from '../pages/Schedule'
import QuickAuditTask from '../pages/QuickAuditTask'
import CustomSchduling from '../pages/CustomSchduling'
import Incident from '../pages/Incident'
import AddIncident from '../pages/AddIncident';
import IncidentDashboard from '../pages/IncidentDashboard';
import IncidentResolve from '../pages/IncidentResolve'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path='/assessment/assessement-details' element={<AssessmentDetails/>}/>
          <Route path='/assessment/assessement-report' element={<AssessmentReport/>}/>
          <Route path="/schedule" element={<Schedule />} />

          <Route path="/quickaudittask" element={<QuickAuditTask />} />
          <Route path="/customschduling" element={<CustomSchduling />} />
          <Route path='/incident' element={<Incident/>}/>
          <Route path='/incident/create' element={<AddIncident/>}/>
          <Route path='/dashboard' element={<IncidentDashboard/>}/>
          <Route path='/incident/resolve' element={<IncidentResolve/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes