 //Function that is called when you click something in the dropdown
	function MapFromDropDown(sel) {
      	DESTINATION = BuildingDataInfo[sel.value];
    	DESTINATION.building = sel.value;
    	reinitialize();	
    }
//Function that is called when you click the "go here" button in the infowindows	
    function MapFromBuildingClick(sel) {
      	DESTINATION = BuildingDataInfo[sel];
    	DESTINATION.building = sel;
    	reinitialize();	
    }
//Function that is called when you toggle the Tunnels and Otrain.    
    function OvsTclick(value){
    	OvsT=value;
    	alert("Your algorithm offset is " + value);
    }
//Function that is called when you click the building icons radio button.    
    function iconsToggle(){
    	icons += 1;
    	initialize();
    }