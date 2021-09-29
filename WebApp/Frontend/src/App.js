import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import Test from './Pages/Test';
import Side from "./MyComponents/sidebar/side"
import NavBar  from './MyComponents/navbar/Navbar';
import StaffSide from "./MyComponents/sidebar/staffside";
import ManageOders from './Pages/staffNewordersPage';
import SupplierOrder from "./Pages/SupplierOrder";



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
     

      <Route path="/side" exact component={Side}/>
      <Route path="/staffside" exact component={StaffSide}/>
      <Route path="/manageOrder" exact component={ManageOders}/>
      <Route path="/supplier" exact component={SupplierOrder}/>

      </Router>
    </div>
  );
}

export default App;
