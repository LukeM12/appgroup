
      function getMyPos() {
        if (navigator && navigator.geolocation) {	
          navigator.geolocation.getCurrentPosition(success, error);	
        } else {
          console.log('Geolocation is not supported');	
        }
      }
     
      function error(){
      	alert("The GPS cannot find your location at the moment");
      	}	

      function success(position){	
		SetLocation(position.coords.latitude, position.coords.longitude);
      }      

