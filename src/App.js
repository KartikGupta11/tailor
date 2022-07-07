import './App.css';
import 'boxicons/css/boxicons.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Allorders from './components/Dashboard/Allorders';
import Home from './components/Home/Home';
import AcceptedOrder from './components/Dashboard/AcceptedOrder';
import RejectedOrder from './components/Dashboard/RejectedOrder';
import Report from './components/Report/ReportTotal';
import Profile from './components/Profile/Profile';
import OrderDetails from './components/Dashboard/OrderDetails';
import Chart from './components/chart/Chart';
import ReportTotal from './components/Report/ReportTotal';
import ReportReturn from './components/Report/ReportReturn';
import Login from './components/Login/Login';
import LogOtp from './components/Login/LogOtp';

function App() {
  return (
    <div className='App'>
      {/* <Dashboard /> */}
      {/* <AcceptedOrder /> */}
      {/* <RejectedOrder /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <>
                <Home />
                <Allorders />
              </>
            }
          />
          <Route
            path='/dashboard/accepted'
            element={
              <>
                <Home />
                <AcceptedOrder />
              </>
            }
          />
          <Route
            path='/dashboard/rejected'
            element={
              <>
                <Home />
                <RejectedOrder />
              </>
            }
          />
          <Route
            path='/dashboard/orderDetails/:id'
            element={
              <>
                <Home />
                <OrderDetails />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Home />
                <Profile />
              </>
            }
          />
          <Route
            path='/report/totalorders'
            element={
              <>
                <Home />
                <ReportTotal />
              </>
            }
          />
          <Route
            path='/report/return'
            element={
              <>
                <Home />
                <ReportReturn />
              </>
            }
          />

          <Route path='/otplogin' element={<LogOtp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
