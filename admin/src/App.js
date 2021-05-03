import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Header from "./components/Header/Header";
import NotFound from "./views/404/NotFound";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-light">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
