import React, { Component } from 'react';
import requireAuth from '../requireAuth';

import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

import '../../style/map-styles.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyYXRvc3RzbyIsImEiOiJjamttZGUyMjMyYXd0M3BwOWhidDZ5am05In0.u6Lz6obeHCPxr8tKb9Km-g'; //Tso

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

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/stratostso/cjldjmln47dg72socw3b4jvdw',
      center: [lng, lat],
      zoom
    });

    map.on('load', () => {
      map.addLayer({
          "id": "users",
          "type": "symbol",
          "source": {
              "type": "geojson",
              "data": {
                  "type": "FeatureCollection",
                  "features": [
                    {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [32.74, 39.97]
                      },
                      "properties": {
                          "username": "Annie Wilkis",
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
                          "username": "Mallory Knox",
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
                          "username": "Samara Morgan",
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
                          "username":"Dexter Morgan",
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
                          "username":"Norman Bates",
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
                          "username":"Swenney Todd",
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
                          "username":"Hannibal Lecter",
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
                          "username":"Patrick Bateman",
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
                          "username":"Stu Macher",
                          "title": "Engineer",
                          "icon": "engineer",
                          "organisation": "Engineers organisation",
                          "skills": "Statical Engineer"
                      }
                    },
                ]
              }
          },
          "layout": {"icon-image": "{icon}"}
      });

      map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['users'] // replace this with the name of the layer
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

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'users', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'users', function () {
          map.getCanvas().style.cursor = '';
      });


    });

  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>

        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

export default Test;
