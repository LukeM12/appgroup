 function setStartLocaion(sel){
    	LOCATION = BuildingDataInfo[sel.value];//sets START general Building Location
    	var temp = new Object ();//Temporary Node to store lat and lng info
    	temp.lat = LOCATION.lat;
    	temp.lng = LOCATION.lng;
    	LOCATION = FindClosestAssociatedPoint(temp, ALLPOINTS);//overwrite our starting location with our closest associated point.
    	reinitialize();	
    }
