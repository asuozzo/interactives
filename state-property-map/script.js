   var map;
   var markerCluster;
   var clusterPath = "images/m";

    function initialize() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: new google.maps.LatLng(43.946515, -72.677099),
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling:'cooperative',
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
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
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      });

      var infoWindow = new google.maps.InfoWindow();
      google.maps.event.addListener(map, "click", function(event) {
          infoWindow.close();
      });

      var markers = buildings.map(function(building, i) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(building.lat, building.lon),
            icon: 'images/building.png',
            map:map,
            space:building.rentable,
            address:building.address,
            vacant:building.vacant,
            unusable:building.unusable,
            buildings:building.buildings,
            agencies:building.agencies
          });
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infoWindow.setContent(textReplace(marker));
                    infoWindow.open(map, marker);
                }
            })(marker, i));
          return marker
        });
      markerCluster = new MarkerClusterer(map, markers,
           {imagePath: clusterPath});
      function textReplace(marker){
        var buildingTitle
        if (marker.buildings === 1){
          buildingTitle = "1 Building";
        } else {
          buildingTitle = marker.buildings + " Buildings"
        }
        var infoText = "<div class='infowindow'><span class='title'>" + marker.address;
        infoText += "</span><span class='subhed'>" + buildingTitle + "</span><span class='agencies'><b>Agencies</b>: ";
        infoText +=  marker.agencies + "</span><span class='space'>";
        infoText += "<b>Total space</b>: " + numberWithCommas(marker.space) + " square feet<br>";
        if (marker.vacant){
          infoText = infoText + "<b>Vacant space</b>: " + numberWithCommas(marker.vacant) + " square feet<br>";
        }
        if (marker.unusable){
          infoText = infoText + "<b>Unusable space</b>: " + numberWithCommas(marker.unusable) + " square feet<br>";
        }
        infoText += "</div>"
        return infoText;
      };

      var selected = document.querySelector('input[name = "filter"]:checked').value;


      google.maps.event.addDomListener(document.getElementById('filter'),
       'change', function() {
        var selected = document.querySelector('input[name = "filter"]:checked').value;
        updateMap(selected);
      });


      function updateMap(selected) {
        console.log(selected)
        infoWindow.close()
        var filteredMarkers = []
        markerCluster.setMap(null)
        for (i=0;i<markers.length;i++){
          var marker = markers[i]
          if (selected === "Vacancies") {
            if (marker.vacant){
              marker.setVisible(true)
              filteredMarkers.push(marker)
            } else {
              marker.setVisible(false)
            }
          } else if (selected === "Unusable"){
            if (marker.unusable){
              marker.setVisible(true)
              filteredMarkers.push(marker)
            } else {
              marker.setVisible(false)
            }
          } else {
            marker.setVisible(true)
            filteredMarkers.push(marker)
          }
        }
        map.setCenter(new google.maps.LatLng(43.946515,-72.677099));
        map.setZoom(8)
        markerCluster = new MarkerClusterer(map, filteredMarkers,
           {imagePath: clusterPath});
      }

    };

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
