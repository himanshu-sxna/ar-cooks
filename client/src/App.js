import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Products from "./pages/Products/Products";
import JournalDetail from "./pages/JournalDetail/JournalDetail";
import AdminMain from "./pages/Admin/adminMain";
import ProtectedRoute from "./auth/protected-route";
import CartState from "./components/context/CartState";

function App() {

  return (
    <Router>
      <CartState>
        <Switch>
          <Route exact path="/ar-cooks" component= {Home}/>
          <Route exact path="/home" component = {Home}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path ="/products" component={Products}/>
          <Route exact path="/blog/:id" component={JournalDetail} />
          <ProtectedRoute exact path="/admin" component={AdminMain} />
          <Route exact path="/" component= {Home}/>
        </Switch>
      </CartState>
    </Router>
  );
}

export default App;
