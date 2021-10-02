import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from './Pages/Test';
import Side from "./MyComponents/sidebar/side"
import NavBar from './MyComponents/navbar/Navbar';
import StaffSide from "./MyComponents/sidebar/staffside";
import ManageOders from './Pages/staffNewordersPage';
import SupplierOrder from "./Pages/SupplierOrder";

import staffeOderManage from  "./Pages/staffOderManage";




import OneOrder from './Pages/Orders/GetOneOrder/OneOrder';
import ViewOneOrder from './Pages/Orders/GetOneOrder/ViewOneOrder';
import SupplierMessages from "./Pages/Admin/SupplierMessages";
import ViewMessages from "./Pages/Admin/ViewMessages";
import Gateway from "./Pages/Payment/Gateway";
import ReceivedOrders from "./Pages/Admin/ReceivedOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

      <Route path="/side" exact component={Side}/>
      
      <Route path="/staffeOder" exact component={staffeOderManage}/>
        <Route path="/approval" exact component={Side} />
        <Route path="/staffside" exact component={StaffSide} />
        <Route path="/manageOrder" exact component={ManageOders} />
        <Route path="/supplier" exact component={SupplierOrder} />
        <Route path="/pendingOrder" exact component={Side} />
        <Route path="/OneOrder" exact component={OneOrder} />
        <Route path="/OneOrder" exact component={OneOrder} />
        <Route path="/approval/oneOrder" exact component={ViewOneOrder} />
        <Route path="/message" exact component={SupplierMessages} />
        <Route path="/view" exact component={ViewMessages} />
        <Route path="/gateway" exact component={Gateway} />
        <Route path="/received" exact component={ReceivedOrders} />


      </Router>
    </div>
  );
}

export default App;
