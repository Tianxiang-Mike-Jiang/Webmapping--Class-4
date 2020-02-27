mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';


var initialCenterPoint = [-98.3443301,41.9748827]
var initialZoom = 3




var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom,
}


var map = new mapboxgl.Map(initOptions);


map.addControl(new mapboxgl.NavigationControl());


apartmentData.forEach(function(apartmentEntry) {

  new mapboxgl.Marker()
    .setLngLat([apartmentEntry.longitude, apartmentEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
     .setHTML(`Want to learn more about <b>${apartmentEntry.apartmentName}</b>, Please visit <a href="http://www.${apartmentEntry.Website}">${apartmentEntry.Website}</a>`))
    .addTo(map);
})



$('#newport').on('click', function() {
  map.flyTo({
    center: [-74.0478106,40.7238993],
    zoom: initialZoom
  })
})

$('#lic').on('click', function() {


  map.flyTo({
    center: [-73.9468553,40.748523],
    zoom: initialZoom
  })
})

$('#bk').on('click', function() {
  var brooklynpoint = [-73.9854956,40.6869778]

  map.flyTo({
    center: brooklynpoint,
    zoom: initialZoom
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
