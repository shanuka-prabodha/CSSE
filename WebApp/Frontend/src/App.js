import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import Test from './Pages/Test';
import Side from "./MyComponents/sidebar/side"

function App() {
  return (
    <div className="App">
      <Router>
      <Side/>
      
      </Router>
    </div>
  );
}

export default App;
