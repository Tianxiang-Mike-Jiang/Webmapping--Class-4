mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';


var initialCenterPoint = [-88.0939588, 42.3021691]
var initialZoom = 9.5

var ZIPLookup = (code) => {
  switch (code) {
    case 1:
      return {
        color: '#beb297',
        description: '60002',
      };
    case 2:
      return {
        color: '#f7d496',
        description: '60010',
      };
    case 3:
      return {
        color: '#FF9900',
        description: '60015',
      };
    case 4:
      return {
        color: '#f7cabf',
        description: '60020',
      };
    case 5:
      return {
        color: '#ea6661',
        description: '60030',
      };
    case 6:
      return {
        color: '#d36ff4',
        description: '60035',
      };
    case 7:
      return {
        color: '#dac0e8',
        description: '60040',
      };
    case 8:
      return {
        color: '#5CA2D1',
        description: '60041',
      };
    case 9:
      return {
        color: '#8ece7c',
        description: '60042',
      };
    case 10:
      return {
        color: '#bab8b6',
        description: '60044',
      };
    case 11:
      return {
        color: '#5f5f60',
        description: '60045',
      };
    case 12:
      return {
        color: '#5f5f60',
        description: '60046',
      };
    case 13:
        return {
          color: '#5f5f60',
          description: '60047',
        };
    case 14:
          return {
            color: '#5f5f60',
            description: '60048',
          };
    case 15:
            return {
              color: '#5f5f60',
              description: '60060',
            };
    case 16:
                return {
                  color: '#5f5f60',
                  description: '60061',
                };
    case 17:
                  return {
                    color: '#5f5f60',
                    description: '60064',
                  };
    case 18:
                    return {
                      color: '#5f5f60',
                      description: '60069',
                    };

    case 19:
                        return {
                          color: '#5f5f60',
                          description: '60073',
                        };
    case 20:
                          return {
                            color: '#5f5f60',
                            description: '60083',
                          };
    case 21:
                            return {
                              color: '#5f5f60',
                              description: '60084',
                            };
    case 22:
                                return {
                                  color: '#5f5f60',
                                  description: '60085',
                                };
    case 23:
                                  return {
                                    color: '#FA8072',
                                    description: '60087',
                                  };
    case 24:
                                    return {
                                      color: '#5f5f60',
                                      description: '60089',
                                    };
    case 25:
                return {
                            color: '#5f5f60',
                              description: '60096',
                                    };
case 25:
          return {
          color: '#5f5f60',
          description: '60099',
                    };
      default:
      return {
        color: '#FA8072',
        description: 'N/A',
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
        'line-color': '#FA8072',
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
          <p><strong>All Cancer:</strong> ${parseInt(hoveredFeature.properties.All_Cancer)}</p>
          <p><strong>Breast Cancer:</strong> ${parseInt(hoveredFeature.properties.Breast_Can)}</p>
          <p><strong>Colorectal Cancer:</strong> ${parseInt(hoveredFeature.properties.Colorectal)}</p>
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
