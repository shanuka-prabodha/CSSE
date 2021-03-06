import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from './Pages/Test';
import Side from "./MyComponents/sidebar/side"
import NavBar from './MyComponents/navbar/Navbar';
import Staffside from "./MyComponents/sidebar/staffside"
import ManageOders from './Pages/staffNewordersPage';
import SupplierOrder from "./Pages/SupplierOrder";

import staffeOderManage from "./Pages/staffOderManage";
import OneOrder from './Pages/Orders/GetOneOrder/OneOrder';
import ViewOneOrder from './Pages/Orders/GetOneOrder/ViewOneOrder';
import SupplierMessages from "./Pages/Admin/SupplierMessages";
import ViewMessages from "./Pages/Admin/ViewMessages";

import Login from './Pages/Login/login';
import Register from './Pages/Login/Register';

import Gateway from "./Pages/Payment/Gateway";
import ReceivedOrders from "./Pages/Admin/ReceivedOrders";
import PayedOrders from "./Pages/Admin/PayedOrders";
import SiteManagerConfirmOrder from "./MyComponents/sidebar/SiteManagerConfirmOrder"
import ViewOneSiteOrder from './Pages/Orders/GetOneOrder/ViewOneSiteOrder';

import StaffeApprovedOders from "./Pages/StaffOder/StaffApprovelPage";
import './Style/home.css'
import Homepage from "./Pages/HomePage/HomePage";
//staff components
import StaffReceived from "./Pages/Staff/StaffReceived";
import StaffPayed from "./Pages/Staff/StaffPayed";

import ApprovedOderManage from "./Pages/staffApprovemangeorder"
import StaffAllOderMange from './Pages/StaffAllOderManage'


function App() {
  return (
    <div className="App">
      <Router>
        {/*<NavBar />*/}

        <Route path="/" exact component={Login} />
       
        <Route path="/staffeOder" exact component={staffeOderManage} />
        <Route path="/siteManagerConfirmOrder" exact component={SiteManagerConfirmOrder} />
        <Route path="/approval" exact component={Side} />
        <Route path="/staffside" exact component={Staffside} />
        <Route path="/manageOrder" exact component={ManageOders} />
        <Route path="/supplier" exact component={SupplierOrder} />
        <Route path="/pendingOrder" exact component={Side} />
        <Route path="/OneOrder" exact component={OneOrder} />
        <Route path="/OneOrder" exact component={OneOrder} />
        <Route path="/approval/oneOrder" exact component={ViewOneOrder} />
        <Route path="/approval/siteOrder" exact component={ViewOneSiteOrder} />
        <Route path="/message" exact component={SupplierMessages} />
        <Route path="/view" exact component={ViewMessages} />

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/gateway" exact component={Gateway} />
        <Route path="/received" exact component={ReceivedOrders} />
        <Route path="/payed" exact component={PayedOrders} />

        <Route path="/staffApproved" exact component={StaffeApprovedOders} />


        <Route path="/st-received" exact component={StaffReceived} />
        <Route path="/st-payed" exact component={StaffPayed} />

        <Route path="/StaffApprovedOderManage" exact component={ApprovedOderManage} />
        <Route path="/StaffAlloder" exact component={StaffAllOderMange} />




      </Router>
    </div>
  );
}

export default App;
