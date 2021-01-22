import React, { useState, useEffect } from "react";
import API from "../src/utils/API";

function App() {

  const [ state, setState ] = useState();

  useEffect(() => { 
    API.APICall()
    .then(res => {
      console.log((res));
      setState(res.data.success);
    });
  }, [state]);


  return (
    <div className="App">
      <p>{state}</p>
    </div>
  );
}

export default App;
