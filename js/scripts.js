mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';


var initialCenterPoint = [-88.0939588, 42.3021691]
var initialZoom = 9

var ZIPLookup = (code) => {
  switch (code) {
    case 1:
      return {
        color: '#f4f455',
        description: '60002',
      };
    case 2:
      return {
        color: '#f7d496',
        description: '60030',
      };
    case 3:
      return {
        color: '#FF9900',
        description: '60031',
      };
    case 4:
      return {
        color: '#f7cabf',
        description: '60045',
      };
    case 5:
      return {
        color: '#ea6661',
        description: '60047',
      };
    case 6:
      return {
        color: '#d36ff4',
        description: '60032',
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
        description: '1890',
      };
    default:
      return {
        color: '#A19C9C',
        description: 'Other',
      };
  }
};

var defaultText = '<p>Get more information by move the mouse on the map</p>'
$('#information').html(defaultText)

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
        property: 'ZIP',
        stops: [
          [
            '01',
            ZIPLookup(1).color,
          ],
          [
            '02',
            ZIPLookup(2).color,
          ],
          [
            '03',
            ZIPLookup(3).color,
          ],
          [
            '04',
            ZIPLookup(4).color,
          ],
          [
            '05',
            ZIPLookup(5).color,
          ],
          [
            '06',
            ZIPLookup(6).color,
          ],
          [
            '07',
            ZIPLookup(7).color,
          ],
          [
            '08',
            ZIPLookup(8).color,
          ],
          [
            '09',
            ZIPLookup(9).color,
          ],
          [
            '10',
            ZIPLookup(10).color,
          ],
          [
            '11',
            ZIPLookup(11).color,
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
      source: 'highlight-feature',
      paint: {
        'line-width': 2,
        'line-opacity': 0.9,
        'line-color': 'red',
      }
    });

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['fill-CLASS 4'],
    });

    // if the mouse pointer is over a feature on our layer of interest
        // take the data for that feature and display it in the sidebar
        if (features.length > 0) {
          map.getCanvas().style.cursor = 'pointer';  // make the cursor a pointer

          var hoveredFeature = features[0]
          var featureInfo = `
            <h4>${hoveredFeature.properties.ZIP}</h4>
            <p><strong>All Cancer:</strong> ${ZIPLookup(parseInt(hoveredFeature.properties.All_Cancer)).description}</p>
            <p><strong>Breast Cancer:</strong> ${ZIPLookup(parseInt(hoveredFeature.properties.Breast_Can)).description}</p>
            <p><strong>Colorectal Cancer:</strong> ${ZIPLookup(parseInt(hoveredFeature.properties.Colorectal)).description}</p>
          `
          $('#information').html(featureInfo)

          // set this lot's polygon feature as the data for the highlight source
          map.getSource('highlight-feature').setData(hoveredFeature.geometry);
        } else {
          // if there is no feature under the mouse, reset things:
          map.getCanvas().style.cursor = 'default'; // make the cursor default

          // reset the highlight source to an empty featurecollection
          map.getSource('highlight-feature').setData({
            type: 'FeatureCollection',
            features: []
          });

          // reset the default message
          $('#information').html(defaultText)
        }
      })

    })
