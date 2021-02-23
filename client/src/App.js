import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./screens/Home";
import Page from "./screens/Page";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page" component={Page} />
      </Switch>
    </div>
  );
}

export default App;
