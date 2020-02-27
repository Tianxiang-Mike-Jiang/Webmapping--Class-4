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
        description: '1900',
      };
    case 8:
      return {
        color: '#5CA2D1',
        description: '2005',
      };
    case 9:
      return {
        color: '#8ece7c',
        description: '2006',
      };
    case 10:
      return {
        color: '#bab8b6',
        description: '2007',
      };
    case 11:
      return {
        color: '#5f5f60',
        description: '2008',
      };
    case 12:
      return {
        color: '#5f5f60',
        description: '2009',
      };
    default:
      return {
        color: '#5f5f60',
        description: '2010',
      };
  }
};

var defaultText = '<p>Move the mouse over the map to Year Built of the property</p>'
$('#feature-info').html(defaultText)

var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom,
}


var map = new mapboxgl.Map(initOptions);


map.addControl(new mapboxgl.NavigationControl());

map.on('style.load', function() {

map.addSource('CLASS 4', {
  type: 'geojson',
  data: './data/CLASS 4.geojson',
});

// log the current map state to the console
console.log(map.getStyle().sources)

map.addLayer({
    id: 'fill-CLASS 4',
    type: 'fill',
    source: 'CLASS 4',
    paint: {
      'fill-color': {
        type: 'categorical',
        property: 'YearBuilt',
        stops: [
          [
            '01',
            YearBuiltLookup(1).color,
          ],
          [
            '02',
            YearBuiltLookup(2).color,
          ],
          [
            '03',
            YearBuiltLookup(3).color,
          ],
          [
            '04',
            YearBuiltLookup(4).color,
          ],
          [
            '05',
            YearBuiltLookup(5).color,
          ],
          [
            '06',
            YearBuiltLookup(6).color,
          ],
          [
            '07',
            YearBuiltLookup(7).color,
          ],
          [
            '08',
            YearBuiltLookup(8).color,
          ],
          [
            '09',
            YearBuiltLookup(9).color,
          ],
          [
            '10',
            YearBuiltLookup(10).color,
          ],
          [
            '11',
            YearBuiltLookup(11).color,
          ],

        ]
      }
    }
  })

  map.addSource('highlight-feature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  })

  map.addLayer({
      id: 'line-map',
      type: 'line',
      source: 'CLASS 4',
      paint: {
        'line-width': 2,
        'line-opacity': 0.9,
        'line-color': 'white',
      }
    });
