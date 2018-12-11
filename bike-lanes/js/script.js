var map,
    currentLayer,
    fiveYearLayer,
    longTermLayer;

function initMap(){
    var styledMapType = new google.maps.StyledMapType(
        [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
],
{name: "styledMap"});

    map = new google.maps.Map(document.getElementById('bike-map'), {
          center: {lat: 44.488201, lng: -73.219850},
          zoom: 12,
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl:false,
          mapTypeControlOptions: {
            mapTypeIds: ['styled_map']
          }
        });

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId('styled_map')

    map.data.loadGeoJson("current.geojson")
    map.data.loadGeoJson("fiveyear.geojson")
    map.data.loadGeoJson("longterm.geojson")

    showJSON("current")

    var dropdown = document.getElementById("bike-dropdown");

    dropdown.addEventListener('change', function(){
        var selectedOption = dropdown.options[dropdown.selectedIndex].getAttribute('name');
        showJSON(selectedOption)
    });

    var strictBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(60.88770, -0.83496),
            new google.maps.LatLng(49.90878, -7.69042)
    );

    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push
    (document.getElementById('bike-legend'));

}


function processPoints(geometry, callback, thisArg) {
  if (geometry instanceof google.maps.LatLng) {
    callback.call(thisArg, geometry);
  } else if (geometry instanceof google.maps.Data.Point) {
    callback.call(thisArg, geometry.get());
  } else {
    geometry.getArray().forEach(function(g) {
      processPoints(g, callback, thisArg);
    });
  }
}

function showJSON(option){
    map.data.setStyle(function(feature){
        if(feature.getProperty('type') === option){
            var color = setColor(feature.getProperty("name"));
            return {
                strokeWeight:2.5,
                strokeColor:color,
                strokeOpacity:.8
            }
        } else {
            return {
                strokeWeight:0
            }
        }
    })
}

function setColor(laneType) {
    if (laneType === "shared-use") {
        return "#03a641"
    } else if (laneType === "greenway" || laneType === "conventional" || laneType === "advisory") {
        return "#a801a5"
    } else if (laneType === "protected") {
        return "#036da6"
    } else if (laneType === "markings") {
        return "#ffc100"
    }
}