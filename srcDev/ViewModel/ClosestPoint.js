	function closest_pt_mark(desti,loca, FinalArray){
		
		var length=loca.surr.length;
		var dist=100000;
		var count=0;
		var closest=desti;
		// intialize dist to high arbitrary number
		//for loop to make marker only for closest point to destination
		
		PtFindLoop:
		for(var w=0; w<length;w++){
			if (loca.surr[w].building == desti.building){
				return loca.surr[w];
			}
			if (loca.surr[w].building != "null"){
				continue;
			}
			if (FinalArray.length >=3){
				for (var INDEX = 0; INDEX< 3; INDEX ++){
					if (FinalArray[FinalArray.length-INDEX] == loca.surr[w]){
						//alert("POint " + FinalArray[FinalArray.length-INDEX].name + "and " + loca.surr[w].name + " are the same ");
						continue PtFindLoop;
					}
				}
			}
				
			var getX=(loca.surr[w].lat);
			var getY=(loca.surr[w].lng);
			var destX=(desti.lat);
			var destY=(desti.lng);
			//code segment to find dist between destination and point
			//var lats=Math.pow(destX-getX,2);
			var lats= destX-getX;
			lats= lats*lats;
			//var lngs=Math.pow(destY-getY,2);
			var lngs= destY-getY;
			lngs= lngs*lngs;
			var pt_distance=Math.sqrt(lats+lngs);
		
			if(pt_distance<dist){
			
				dist=pt_distance;//update the distance
				closest=loca.surr[w];
				
			}
			
		}
	
		return closest;
	
}
