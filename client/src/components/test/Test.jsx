import React, { Component } from 'react';
import requireAuth from '../requireAuth';

import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

import '../../style/map-styles.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyYXRvc3RzbyIsImEiOiJjamttZGUyMjMyYXd0M3BwOWhidDZ5am05In0.u6Lz6obeHCPxr8tKb9Km-g';

class Test extends Component {


  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 32.74,
      lat: 39.97,
      zoom: 13
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const filterGroup = document.getElementById('filter-group');

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/stratostso/cjldjl0pa63to2sp6yl9cdk2j',
      center: [lng, lat],
      zoom
    });

    var gpsLocation = {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.74, 39.97]
                },
                "properties": {
                    "username": "Barry Allen",
                    "title": "Nurse",
                    "icon": "nurse",
                    "organisation": "Red Cross",
                    "skills": "High Skilled"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.72,39.96]
                },
                "properties": {
                    "username": "Raven Darkholme",
                    "title": "Nurse",
                    "icon": "nurse",
                    "organisation": "Red Cross",
                    "skills": "Low Skilled"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.745,39.955]
                },
                "properties": {
                    "username": "Wade Wilson",
                    "title": "Nurse",
                    "icon": "nurse",
                    "organisation": "Doctors Without Borders",
                    "skills": "Trainee"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.75, 39.97]
                },
                "properties": {
                    "username":"Bruce Banner",
                    "title": "Doctor",
                    "icon": "doctor",
                    "organisation": "Red Cross",
                    "skills": "Blood Specialist"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.76, 39.96]
                },
                "properties": {
                    "username":"Tony Stark",
                    "title": "Doctor",
                    "icon": "doctor",
                    "organisation": "Doctors Without Borders",
                    "skills": "Anesthisiologist"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.764, 39.964]
                },
                "properties": {
                    "username":"Hal Jordan",
                    "title": "Doctor",
                    "icon": "doctor",
                    "organisation": "Doctors Without Borders",
                    "skills": "Surgent"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.738, 39.979]
                },
                "properties": {
                    "username":"Bruce Wayne",
                    "title": "Engineer",
                    "icon": "engineer",
                    "organisation": "Engineers organisation",
                    "skills": "CEO"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.733, 39.976]
                },
                "properties": {
                    "username":"Clark Kent",
                    "title": "Engineer",
                    "icon": "engineer",
                    "organisation": "Engineers organisation",
                    "skills": "Structural"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [32.746, 39.966]
                },
                "properties": {
                    "username":"Peter Parker",
                    "title": "Engineer",
                    "icon": "engineer",
                    "organisation": "Engineers organisation",
                    "skills": "Statical Engineer"
                }
              },
            ]
    };

    map.on('load', () => {
      map.addSource("gpsLocation", {
          "type": "geojson",
          "data": gpsLocation
      });

      gpsLocation.features.forEach(function (feature) {
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
      ///////////////////Nurse PopUp
      map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['poi-nurse']
        });

        if (!features.length) {
          return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            '<h3>'+feature.properties.username+'</h3><br /><p><h2><b>' + feature.properties.title + '</b></h2><br />Skills: ' + feature.properties.skills + '<br /><p>Organisation: ' + feature.properties.organisation  + '<br /></p>')
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      map.on('mouseenter', 'poi-nurse', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'poi-nurse', function () {
          map.getCanvas().style.cursor = '';
      });

      ///////////////////Doctor PopUp
      map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['poi-doctor']
        });

        if (!features.length) {
          return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            '<h3>'+feature.properties.username+'</h3><br /><p><h2><b>' + feature.properties.title + '</b></h2><br />Skills: ' + feature.properties.skills + '<br /><p>Organisation: ' + feature.properties.organisation  + '<br /></p>')
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      map.on('mouseenter', 'poi-doctor', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'poi-doctor', function () {
          map.getCanvas().style.cursor = '';
      });

      ///////////////////Engineer PopUp
      map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['poi-engineer']
        });

        if (!features.length) {
          return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            '<h3>'+feature.properties.username+'</h3><br /><p><h2><b>' + feature.properties.title + '</b></h2><br />Skills: ' + feature.properties.skills + '<br /><p>Organisation: ' + feature.properties.organisation  + '<br /></p>')
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      map.on('mouseenter', 'poi-engineer', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'poi-engineer', function () {
          map.getCanvas().style.cursor = '';
      });
    });

  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div>Icons made by
            <a href="https://www.flaticon.com/authors/freepik" title="Nurse">Nurse</a> from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                target="_blank">CC 3.0 BY</a>
        </div>
        <div>Icons made by
            <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                target="_blank">CC 3.0 BY</a>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
        <nav id='filter-group' className='filter-group'></nav>
      </div>
    );
  }
}

export default Test;
