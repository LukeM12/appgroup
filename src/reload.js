function reinitialize() {
		var mapOptions = {
          center: new google.maps.LatLng( 45.388081, -75.69602),
          zoom: 15
        };
        alert ("building = " + DESTINATION.building + "lat " + DESTINATION.lat + " lng " + DESTINATION.lng);
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);	
		// 	You can enter any points here and it should draw the polyline.
		var LocalDestination = new Object();
		
		LocalDestination.building = DESTINATION.building;
		LocalDestination.lat = DESTINATION.lat;
		LocalDestination.lng = DESTINATION.lng;
		
		var dest=LocalDestination;	// destination
		var loc=C4;		// location
		
		var myLatlng = new google.maps.LatLng(loc.lat,loc.lng);
		var destLatlng= new google.maps.LatLng(dest.lat,dest.lng);
		var marker = new google.maps.Marker({
			position: myLatlng,
			title:"location"
		});
		//sets up marker to destination
		var destmarker = new google.maps.Marker({
			position: destLatlng,
			map: map,
			title:"destination"
		});
		
		var pathArray=new Array();
		pathArray.push(new google.maps.LatLng(loc.lat,loc.lng))
		//var path_f=getpath(loc,dest,dest.building);
		var count = 12;


		while ( loc.building != dest.building ) {
			count --;
			alert(loc.building);
			if (count == 0 )
			{
				alert("infintite loop, exciting");
				break;
			}
			var closest_pt=closest_pt_mark(dest,loc);
			var markcoord=new google.maps.LatLng(closest_pt.lat,closest_pt.lng);
			pathArray.push(markcoord);
			loc=closest_pt;
		}
		
		var flightPath = new google.maps.Polyline({
		path: pathArray,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
		});
		
		flightPath.setMap(map);
		}
		

		
