import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Detail from "./page/Detail";
import MainPage from "./page/MainPage";
import Write from "./page/Write";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/white" component={Write} />
      </Switch>
    </div>
  );
}

export default App;
