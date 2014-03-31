function reinitialize() {
	//Style Array removes all pre existing google maps Labels that are undesirable 
	var styleArray = [{featureType: "all",elementType: "labels",stylers: [ { visibility: "off" } ]},
					  {featureType: "road", elementType: "labels", stylers: [ { visibility: "on"} ]},
					  {featureType: "landscape", elementType: "labels", stylers: [ { visibility: "on" } ]}
	                 ]
	
	//initializes the map so it is centered around the destination.
	var mapOptions = {
          center: new google.maps.LatLng(DESTINATION.lat, DESTINATION.lng),
          zoom: 17,
          disableDefaultUI: true,
          styles: styleArray
        };
		
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);	
    //Make a step by step trail of custom point objects that use the graph to get from location to destination
    var pathArray = pathFinder(START,DESTINATION);
    //Array to make them LatLng objects.
    var walkPath = new Array();
    for(var i=0;i<pathArray.length;i++){
    	walkPath.push(new google.maps.LatLng(pathArray[i].lat,pathArray[i].lng));
    }
    //Initializes the Polyline using the newly created array that holds our google maps latlng objects.	
	var flightPath = new google.maps.Polyline({
		path: walkPath,
		geodesic: true,
		strokeColor: '#FFFF',
		strokeOpacity: 1.5,
		strokeWeight: 3
		});
	
	//sets polyline on the map.	
	flightPath.setMap(map);
		if((icons%2) == 0){
			layIconsBuilding(DESTINATION, map);
		}
		layIcons(map);
}
