import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Header from "./components/Header/Header";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-light">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
