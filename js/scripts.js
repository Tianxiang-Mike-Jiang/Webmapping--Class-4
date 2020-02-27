mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';


var initialCenterPoint = [-73.991780, 40.746]
var initialZoom = 11.5

var YearBuiltLookup = (code) => {
  switch (code) {
    case 1:
      return {
        color: '#f4f455',
        description: '2000',
      };
    case 2:
      return {
        color: '#f7d496',
        description: '2001',
      };
    case 3:
      return {
        color: '#FF9900',
        description: '2002',
      };
    case 4:
      return {
        color: '#f7cabf',
        description: '2003',
      };
    case 5:
      return {
        color: '#ea6661',
        description: '2004',
      };
    case 6:
      return {
        color: '#d36ff4',
        description: '2011',
      };
    case 7:
      return {
        color: '#dac0e8',
        description: 'Transportation & Utility',
      };
    case 8:
      return {
        color: '#5CA2D1',
        description: 'Public Facilities & Institutions',
      };
    case 9:
      return {
        color: '#8ece7c',
        description: 'Open Space & Outdoor Recreation',
      };
    case 10:
      return {
        color: '#bab8b6',
        description: 'Parking Facilities',
      };
    case 11:
      return {
        color: '#5f5f60',
        description: 'Vacant Land',
      };
    case 12:
      return {
        color: '#5f5f60',
        description: 'Other',
      };
    default:
      return {
        color: '#5f5f60',
        description: 'Other',
      };
  }
};
var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom,
}


var map = new mapboxgl.Map(initOptions);


map.addControl(new mapboxgl.NavigationControl());

map.addSource('CLASS 4', {
  type: 'geojson',
  data: './data/CLASS 4.geojson',
});

// log the current map state to the console
console.log(map.getStyle().sources)

map.addLayer({
   id: 'highlight-line',
   type: 'line',
   source: 'highlight-feature',
   paint: {
     'line-width': 2,
     'line-opacity': 0.9,
     'line-color': 'black',
       }
 });
