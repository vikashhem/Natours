/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);

// export const displayMap = (locations) => {
mapboxgl.accessToken =
  'pk.eyJ1IjoidmlrYXNoLWhlbWJyYW0iLCJhIjoiY2w2N3dmY3dxMDc3ZTNpcWhtaXFtNTZ5byJ9.HMmpCruaPqd5kVQmr6IQvw';

var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/vikash-hembram/cl67x95ow003814losh8jmr1h',
  scrollZoom: false,
  // center: [-118.113491, 34.111745],
  // zoom: 10,dddddddd
  interactive: true,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);
  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
