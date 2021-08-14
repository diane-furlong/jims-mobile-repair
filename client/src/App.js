import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../src/components/navbar/navbar.js'
import Home from '../src/pages/home/home.js'
import Mywork from '../src/pages/MyWork'
import Contact from '../src/pages/contact'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/mywork">
            <Mywork/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
