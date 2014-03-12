 function FindClosestAssociatedPoint(loc, mainArr){		//takes in curr location, and the main array of all points
	var closestPt = mainArr[0];
	alert(mainArr[4].building);
	var b = 10000;								
	var shortDist;
	var curr = mainArr.length;
	var count = 0;
	alert(curr + " is this");
	//it maxes loop at around 80, divide it 3 times 
	for(var i=0; i < 80;i++){					//till end of array
		
		shortDist = closest_pt_mark2(loc, mainArr[i]);		//shortDist is the distance calculated
		if(shortDist<b){			//if its less than b 
			b=shortDist;				//update b to shortest, so next loop it will compare to shortest
			closestPt=mainArr[i];		//update our point, so it finds the closest		
		}
		count++;

	}
	alert("countr is "+ count);
	return closestPt;			//return the closest point of our object from the current location
}

function closest_pt_mark2(desti , loca)
	{
		var length = loca.surr.length;	
		var dist = 100000;		// initialise dist to high arbitrary number
		var closest = desti; 	// set closest point to the destination
		
		//for loop to make marker only for closest point to destination
		
		for(var w = 0; w < length ; w++)
		{
			var getX = (loca.surr[w].lat);
			var getY = (loca.surr[w].lng);
			var destX = (desti.lat);
			var destY = (desti.lng);
			
			//code segment to find dist between destination and point
			
			// latitudes
			var lats = destX - getX;
			lats = lats * lats;
			
			// longitudes
			var lngs = destY - getY;
			lngs = lngs * lngs;
			
			// distance from point
			var pt_distance = Math.sqrt(lats + lngs);
			
			// if the pt_distance is less than dist then update dist and closest point
			if(pt_distance < dist)
			{
				dist = pt_distance;		//update the distance
				//closest = loca.surr[w]; // reset the closest point
			}	
		}
		return dist;	//CHANGED THIS TO return dist, because distance is needed to calculate closest point in the other function
	}	
	  
