import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from './Pages/Test';
import Side from "./MyComponents/sidebar/side"
import NavBar from './MyComponents/navbar/Navbar';
import StaffSide from "./MyComponents/sidebar/staffside";
import ManageOders from './Pages/staffNewordersPage';
import SupplierOrder from "./Pages/SupplierOrder";
import OneOrder from './Pages/Orders/GetOneOrder/OneOrder';
import ViewOneOrder from './Pages/Orders/GetOneOrder/ViewOneOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Route path="/approval" exact component={Side} />
        <Route path="/staffside" exact component={StaffSide} />
        <Route path="/manageOrder" exact component={ManageOders} />
        <Route path="/supplier" exact component={SupplierOrder} />
        <Route path="/pendingOrder" exact component={Side} />
        <Route path="/OneOrder" exact component={OneOrder} />
        <Route path="/OneOrder" exact component={OneOrder} />
        <Route path="/approval/oneOrder" exact component={ViewOneOrder} />

      </Router>
    </div>
  );
}

export default App;
