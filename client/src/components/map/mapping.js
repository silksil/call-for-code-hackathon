export function Mapping() {
      mapboxgl.accessToken = 'pk.eyJ1IjoidGltaWJtIiwiYSI6ImNqa2M4cnZ5aDJ1anczcW5jNGJ0bTgweDEifQ.vybx1QrlJySZsoyiG-h8EQ';

      var filterGroup = document.getElementById('filter-group');
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/timibm/cjki7srvr3b5a2rp5xc67u73t',
          center: [32.7, 40],
          zoom: 11.15
      });

      // Import GeoJSON data from external source using ajax
      //the imported data cannot be used directly, but only gpsLocation.responseJSON
      var gpsLocation = $.ajax({
        url:"./data.geojson",
        dataType: "json",
        success: console.log("Data successfully loaded."),
        error: function (xhr) {
          alert(xhr.statusText)
        }
      })

      map.on('load', function () {
          // Add a GeoJSON source containing place coordinates and information.
          map.addSource("gpsLocation", {
              "type": "geojson",
              "data": gpsLocation.responseJSON
          });

          gpsLocation.responseJSON.features.forEach(function (feature) {
              var symbol = feature.properties['icon'];
              var layerID = 'poi-' + symbol;

              // Add a layer for this symbol type if it hasn't been added already.
              if (!map.getLayer(layerID)) {
                  map.addLayer({
                      "id": layerID,
                      "type": "symbol",
                      "source": "gpsLocation",
                      "layout": {
                          "icon-image": symbol,
                          "icon-allow-overlap": true
                      },
                      "filter": ["==", "icon", symbol]
                  });

                  // Add checkbox and label elements for the layer.
                  var input = document.createElement('input');
                  input.type = 'checkbox';
                  input.id = layerID;
                  input.checked = true;
                  filterGroup.appendChild(input);

                  var label = document.createElement('label');
                  label.setAttribute('for', layerID);
                  label.textContent = symbol;
                  filterGroup.appendChild(label);

                  // When the checkbox changes, update the visibility of the layer.
                  input.addEventListener('change', function (e) {
                      map.setLayoutProperty(layerID, 'visibility',
                          e.target.checked ? 'visible' : 'none');
                  });
              }
          });
      });

//////////////// Pop Up - Nurses ////////////////
      map.on('click', function(e) {
        var featuresNurse = map.queryRenderedFeatures(e.point, {
          layers: ['poi-nurse'] // replace this with the name of the layer
        });

        if (!featuresNurse.length) {
          return;
        }

        var feature = featuresNurse[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<h3>Nurse</h3><p>Organisation: ' + feature.properties.organisation + '<br />Skills: ' + feature.properties.skills + '<br /></p>')
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter','poi-nurse', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave','poi-nurse', function () {
          map.getCanvas().style.cursor = '';
      });

//////////////// Pop Up - Doctor ////////////////
      map.on('click', function(e) {
        var featuresDoctor= map.queryRenderedFeatures(e.point, {
          layers: ['poi-doctor'] // replace this with the name of the layer
        });

        if (!featuresDoctor.length) {
          return;
        }

        var feature = featuresDoctor[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<h3>Doctor</h3><p>Organisation: ' + feature.properties.organisation + '<br />Specialisation: ' + feature.properties.skills + '<br /></p>')
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter','poi-doctor', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave','poi-doctor', function () {
          map.getCanvas().style.cursor = '';
      });

//////////////// Pop Up - Engineer ////////////////
      map.on('click', function(e) {
        var featuresEngineer= map.queryRenderedFeatures(e.point, {
          layers: ['poi-engineer'] // replace this with the name of the layer
        });

        if (!featuresEngineer.length) {
          return;
        }

        var feature = featuresEngineer[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15]})
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<h3>Engineer</h3><p>Organisation: ' + feature.properties.organisation + '<br />Field: ' + feature.properties.skills + '<br /></p>')
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter','poi-engineer', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave','poi-engineer', function () {
          map.getCanvas().style.cursor = '';
      });
}
