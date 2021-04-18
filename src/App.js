import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/login";
import HomeBg from "./Components/home-bg/home-bg.component";

function App() {
  return (
    <Router className="App">
      <HomeBg className="login-container">
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </HomeBg>
    </Router>
  );
}

export default App;
