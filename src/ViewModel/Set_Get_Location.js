//Function to set our current location given a latitude and longitude 
function SetLocation(lat,lng){
	    //creates a new object with lat and lng parameters
     	var loc = new Object();
     	loc.lat = lat;
     	loc.lng = lng;
  		LOCATION = FindClosestAssociatedPoint(loc, ALLPOINTS);
  		alert("The closest point to you is " + LOCATION.name);	
   	}

//function to find our location using gps data.   
function getLocation(){
	
	 if (navigator.geolocation){
		 navigator.geolocation.getCurrentPosition(setPosition);
	   }
	 
	 else{
		alert("Geolocation is not supported by this browser.");
	   }
	}

//function to set position given a 
function setPosition(position) {
	  SetLocation(position.coords.latitude, position.coords.longitude);	
	 }
	 
getLocation();
 
	
