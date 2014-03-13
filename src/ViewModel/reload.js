function reinitialize() {
		var mapOptions = {
          center: new google.maps.LatLng( 45.388081, -75.69602),
          zoom: 17
        };
		//alert("Hello");
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);	
		// 	You can enter any points here and it should draw the polyline.
		var LocalDestination = new Object();
		
		LocalDestination.building = DESTINATION.building;
		LocalDestination.lat = DESTINATION.lat;
		LocalDestination.lng = DESTINATION.lng;
		
		
	//	alert(LOCATION.lat);
		var dest=LocalDestination;	// destination
		var loc =B59;    
		//THIS IS WHERE IT SHOULD BE CHANGED TO LOCATION
		 //LOCATION;		// location GET A BETTER LOCATION
		
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


		var count = 12;


		while ( loc.building != dest.building ) {
			
	//Does the final array have a duplicate?
	//Etc
	
			if (count == 0 )
			{
				alert("infintite loop, exiting");
				break;
			}
			var closest_pt=closest_pt_mark(dest,loc);
			var markcoord = new google.maps.LatLng(closest_pt.lat,closest_pt.lng);
			
			//if mark coord is equal to one of the three previous points
			//is_prev(Array, 3), check previous 3 points, just toss in an integer
			
			//if next point is further than the current point
			//is_not_best
			
			//if there exists a duplicate
			//is_dup(pathArray)
			
			//if array gets really big
			//is_really_big(Array.length)
			
			
			//test dosomething
			pathArray.push(markcoord);
			loc=closest_pt;
		}
		
		var flightPath = new google.maps.Polyline({
		path: pathArray,
		geodesic: true,
		strokeColor: '#FFFF',
		strokeOpacity: 1.5,
		strokeWeight: 3
		});
		
		flightPath.setMap(map);
		layIconsNoBuilding(map);
	layIcons(map);
		}
		

		
