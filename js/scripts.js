mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';


var initialCenterPoint = [-88.0939588, 42.3021691]
var initialZoom = 9.5

var ZIPLookup = (code) => {
  switch (code) {
    case 1:
      return {
        color: '#FF3535',
        description: '60002',
      };
    case 2:
      return {
        color: '#BA0000',
        description: '60010',
      };
    case 3:
      return {
        color: '#FF3535',
        description: '60015',
      };
    case 4:
      return {
        color: '#BA0000',
        description: '60020',
      };
    case 5:
      return {
        color: '#FF3535',
        description: '60030',
      };
    case 6:
      return {
        color: '#BA0000',
        description: '60035',
      };
    case 7:
      return {
        color: '#ea6661',
        description: '60040',
      };
    case 8:
      return {
        color: '#BA0000',
        description: '60041',
      };
    case 9:
      return {
        color: '#FF3535',
        description: '60042',
      };
    case 10:
      return {
        color: '#BA0000',
        description: '60044',
      };
    case 11:
      return {
        color: '#BA0000',
        description: '60045',
      };
    case 12:
      return {
        color: '#FF3535',
        description: '60046',
      };
    case 13:
        return {
          color: '#FF3535',
          description: '60047',
        };
    case 14:
          return {
            color: '#FF3535',
            description: '60048',
          };
    case 15:
            return {
              color: '#FF3535',
              description: '60060',
            };
    case 16:
                return {
                  color: '#FF3535',
                  description: '60061',
                };
    case 17:
                  return {
                    color: '#FD7C7C',
                    description: '60064',
                  };
    case 18:
                    return {
                      color: '#BA0000',
                      description: '60069',
                    };

    case 19:
                        return {
                          color: '#FD7C7C',
                          description: '60073',
                        };
    case 20:
                          return {
                            color: '#FF3535',
                            description: '60083',
                          };
    case 21:
                            return {
                              color: '#FF3535',
                              description: '60084',
                            };
    case 22:
                                return {
                                  color: '#FD7C7C',
                                  description: '60085',
                                };
    case 23:
                                  return {
                                    color: '#FA8072',
                                    description: '60087',
                                  };
    case 24:
                                    return {
                                      color: '#FF3535',
                                      description: '60089',
                                    };
    case 25:
                return {
                            color: '#FF3535',
                              description: '60096',
                                    };
case 26:
          return {
          color: '#FF3535',
          description: '60099',
                    };
                    case 27:
                              return {
                              color: '#FF3535',
                              description: '60031',
                                        };
      default:
      return {
        color: '#2F4F4F',
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
            '60002',
            ZIPLookup(1).color,
          ],
          [
            '60010',
            ZIPLookup(2).color,
          ],
          [
            '60015',
            ZIPLookup(3).color,
          ],
          [
            '60020',
            ZIPLookup(4).color,
          ],
          [
            '60030',
            ZIPLookup(5).color,
          ],
          [
            '60035',
            ZIPLookup(6).color,
          ],
          [
            '60040',
            ZIPLookup(7).color,
          ],
          [
            '60041',
            ZIPLookup(8).color,
          ],
          [
            '60042',
            ZIPLookup(9).color,
          ],
          [
            '60044',
            ZIPLookup(10).color,
          ],
          [
            '60045',
            ZIPLookup(11).color,
          ],
          [
            '60046',
            ZIPLookup(12).color,
          ],
          [
            '60047',
            ZIPLookup(13).color,
          ],
          [
            '60048',
            ZIPLookup(14).color,
          ],
          [
            '60060',
            ZIPLookup(15).color,
          ],
          [
            '60061',
            ZIPLookup(16).color,
          ],
          [
            '60064',
            ZIPLookup(17).color,
          ],
          [
            '60069',
            ZIPLookup(18).color,
          ],
          [
            '60073',
            ZIPLookup(19).color,
          ],
          [
            '60083',
            ZIPLookup(20).color,
          ],
          [
            '60084',
            ZIPLookup(21).color,
          ],
          ['60085',
          ZIPLookup(22).color,
        ],
        [
          '60087',
          ZIPLookup(23).color,
        ],
        [
          '60089',
          ZIPLookup(24).color,
        ],
        [
          '60096',
          ZIPLookup(25).color,
        ],
        [
          '60099',
          ZIPLookup(26).color,
        ],[
          '60031',
          ZIPLookup(27).color,
        ]
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
        'line-color': '#000000',
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
