import React, { useState } from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
   const [lat, setLat] = useState(null);
   const [error, setError] = useState('');

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
      setLat (position.coords.latitude);
      },
      (err) => {
        setError(err.message);
      }
    );
  

  let result;

  if (error && !lat) {
  result =  <div>Error: {error}</div>;
  }

  else if (!error && lat) {
    result = <div>Latitude: {lat}</div>;
  }
  else if (!error && !lat) {
  result = <div>Loading!</div>;
  
  return {result};
}
}
ReactDOM.render(<App />, document.querySelector("#root"));
