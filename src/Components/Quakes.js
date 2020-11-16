import React from 'react';

function Quakes(props) {
  return(
    <div id="info">
    { props.earthquakes.features !== undefined && 
      (props.earthquakes.features).map((earthquake) => (
        <p key={ earthquake.properties.ids }>{ earthquake.properties.title }</p>
      ))
    }
    </div>
  )
};

export default Quakes;