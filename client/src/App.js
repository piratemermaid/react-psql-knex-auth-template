import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./screens/Home";
import Page from "./screens/Page";
import Signup from "./screens/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
