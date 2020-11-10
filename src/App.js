import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/:projectId" component={Project} />
      </Switch>
    </div>
  );
}

export default App;
