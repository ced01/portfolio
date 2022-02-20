import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Skills from "./pages/skills/skills";
import Header from "./partials/header/header";
import Services from "./pages/services/services";
import Test from "./pages/test/test";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

function App(props) {
  return (
    <Router>
      <Header />
          <Switch>
              <Route path="/home" render={()=> <Home/>}/>
              <Route path="/skills" render={() => <Skills/>}/>
              <Route path="/contact" render={() => <Contact/>}/>
              <Route path="/services" render={() => <Services/>}/>
              <Route path="/test" render={() => <Test/>}/>
              <Route path="/" render={()=> <Home/>}/>
          </Switch>
    </Router>
  );
}

export default App;
