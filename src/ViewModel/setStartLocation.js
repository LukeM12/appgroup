 function setStartLocaion(sel){
    	START = BuildingDataInfo[sel.value];//sets START general Building Location
    	var temp = new Object ();//Temporary Node to store lat and lng info
    	temp.lat = START.lat;
    	temp.lng = START.lng;
    	START = FindClosestAssociatedPoint(temp, ALLPOINTS);//overwrite our starting location with our closest associated point.
    	reinitialize();	
    }
