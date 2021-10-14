import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CheckOut from "./Checkout/checkOut";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cart" component={CheckOut} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
