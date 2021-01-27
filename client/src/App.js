import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Products from "./pages/Products/Products";
import contact from "./"

function App() {

  const [ state, setState ] = useState();

  useEffect(() => { 
    API.APICall()
    .then(res => {
      console.log(res);
      setState(res.data.success);
    })
  }, [state]);


  return (
    <Router>
      <Switch>
        <Route exact path="/ar-cooks" component= {Home}/>
        <Route exact path="/home" component = {Home}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path ="/products" component={Products}/>
      </Switch>
    </Router>
  );
}

export default App;
