import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Home from "./pages/Home/Home";

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
    <Home/>
  );
}

export default App;
