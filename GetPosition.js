
//<!Mazhar and Samian>

      function getMyPos() {									//main function to get pos
        if (navigator && navigator.geolocation) {				//if a GPS is available in the phone, (good for phones with off gps's etc) 
          navigator.geolocation.getCurrentPosition(success, error);		//then go to success, or error
        } else {
          console.log('Geolocation is not supported');		//if geolocation is not supported, send a msg
        }
      }
     
      function error(){alert("The GPS cannot find your location at the moment");}			//if the location cannot be found come here

      function success(position){		//if it is found come here
        var myCurrPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);//make a Google map type lat long, to set to current pos		
		alert("Your location is " + myCurrPos);		
      }      
 
