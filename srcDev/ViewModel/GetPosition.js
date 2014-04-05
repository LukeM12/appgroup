
      function getMyPos() {
    	//Checks to see if users phone or browser supports GPS.  
        if (navigator && navigator.geolocation) {	
          navigator.geolocation.getCurrentPosition(success, error);	
        } else {
          console.log('Geolocation is not supported');	
        }
      }
     //function to display error when GPS is not available
      function error(){
      	alert("The GPS cannot find your location at the moment");
      	}	
      //Sets current location to the recently gathered GPS location from browser or phone.
      function success(position){	
		SetLocation(position.coords.latitude, position.coords.longitude);
      }      

