//Function to set our current location given a latitude and longitude 
   
function SetLocation(lat,lng){
  	var loc = new Object();
  	loc.lat = lat;
  	loc.lng = lng;
	LOCATION = FindClosestAssociatedPoint(loc, ALLPOINTS);
	}

//function to find our location using gps data.   
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(setPosition);
    }
  else{alert("Geolocation is not supported by this browser.");}
  }
//function to set position given a 
function setPosition(position) {
	  SetLocation(position.coords.latitude, position.coords.longitude);	
	 }
	 
getLocation();
 
	
