import './App.css';
import Navbar from './components/Navbar';
import World from "./components/World/World";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import India from './components/India/India';

function App() {
  return (
    <Router>
    <>
    <Navbar/>
    <h1 className="text-center text-dark my-4">Covid-19 Tracker</h1>
    <Switch>
          <Route exact path="/">
            <World />
          </Route>
          <Route exact path="/india">
            <India />
          </Route>
        </Switch>

    </>
    </Router>
  );
}

export default App;
