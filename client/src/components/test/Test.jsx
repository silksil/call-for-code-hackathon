import React, { Component } from 'react';
import requireAuth from '../requireAuth';

import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyYXRvc3RzbyIsImEiOiJjamttZGUyMjMyYXd0M3BwOWhidDZ5am05In0.u6Lz6obeHCPxr8tKb9Km-g'; //Tso

class Test extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 32.73,
      lat: 39.97,
      zoom: 12
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
          "id": "points",
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
                          "name": "Annie Wilkis",
                          "title": "nurse",
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
                          "name": "Mallory Knox",
                          "title": "nurse",
                          "icon": "nurse",
                          "organisation": "Red Cross",
                          "skills": "Low Skilled"
                      }
                    },
                    {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [32.745,39.94]
                      },
                      "properties": {
                          "name": "Samara Morgan",
                          "title": "nurse",
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
                          "name":"Dexter Morgan",
                          "title": "doctor",
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
                          "name":"Norman Bates",
                          "title": "doctor",
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
                          "name":"Swenney Todd",
                          "title": "doctor",
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
                          "name":"Hannibal Lecter",
                          "title": "engineer",
                          "icon": "engineer",
                          "organisation": "Engineers organisation",
                          "skills": "CEO"
                      }
                    },
                    {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [32.733, 39.93]
                      },
                      "properties": {
                          "name":"Michael Mayers",
                          "title": "engineer",
                          "icon": "engineer",
                          "organisation": "Engineers organisation",
                          "skills": "Structural"
                      }
                    },
                    {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [32.746, 39.936]
                      },
                      "properties": {
                          "name":"Stu Macher",
                          "title": "engineer",
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
    });

  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

export default Test;
