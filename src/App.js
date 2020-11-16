import React from 'react';
import Map from './Components/Map'
import Quakes from './Components/Quakes'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earthquakes: []
    }
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then((buffer) => {
        if (buffer.ok) {
          return buffer.json(buffer);
        } else {
          console.log('API error');
          return [];
        }
      })
      .then((data) => this.setState({ earthquakes: data }))
      .catch((error) => console.log(error));
  }
  
  render() {
    return(
      <div className="app">
        <div className="mapContainer">
          <Map earthquakes={this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
          <Quakes earthquakes={this.state.earthquakes}/>
        </div>
      </div>
    )
  };
}

export default App;
