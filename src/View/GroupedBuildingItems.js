//Hash table containing data. Name, Lat, Long, Info
  var BuildingDataInfo = {
        'AH' : {Name: "Alumni Hall", Lat: 45.386454, Long: -75.693268, Info: '<p><img src="THicon.bmp" alt="Smiley face"><font size="+1">Tim Hortons:</font> <b>1rst Floor</b></p>'},
		'AA' : {Name: "Architecture Building", Lat: 45.383973, Long: -75.697436, Info: ''},
		"AC" : {Name: "Athletics Building", Lat: 45.3862510, Long: -75.694164, Info: '<p><img src="THicon.bmp" alt="TH"><font size="+1">Tim Hortons:</font> <b>1rst Floor</b></p>'},
		"AP" : {Name: "Azrieli Pavillion", Lat: 45.382865, Long: -75.698992, Info: ''},
		"AT" : {Name: "Azrieli Theater", Lat: 45.383321, Long: -75.698761, Info: ''},
		"IH" : {Name: "Carleton Ice House", Lat: 45.385959, Long: -75.692581, Info: ''},
		"TT" : {Name: "Carleton Technology & Training Center (CTTC)", Lat: 45.384502, Long: -75.693614, Info: ''},
		"CB" : {Name: "Canal Building", Lat: 45.384176, Long: -75.698519, Info: '<p><font size="+1">Second Cup:</font> <b>1rst Floor</b></p>'},
		"CC" : {Name: "Colonel By Child Care Center", Lat: 45.385529, Long: -75.694169, Info: ''},
		"DT" : {Name: "Dunton Tower", Lat: 45.382594, Long: -75.699335, Info: ''},
		"FH" : {Name: "Field House", Lat: 45.386936, Long: -75.694507, Info: ''},
		"FR" : {Name: "Frontenac House", Lat: 45.38606, Long: -75.698364, Info: ''},
		"GH" : {Name: "Glengary House", Lat: 45.386706, Long: -75.697278, Info: ''},
		"GR" : {Name: "Grenville House", Lat: 45.386471, Long: -75.69846, Info: ''},
		"GY" : {Name: "Gymnasium", Lat: 45.385676, Long: -75.693316, Info: ''},
		"HP" : {Name: "Herzberg Building", Lat: 45.382048, Long: -75.697581, Info: ''},
		"HC" : {Name: "Human Computer Interaction Building", Lat: 45.380672, Long: -75.699496, Info: ''},
		"LH" : {Name: "Lanark House", Lat: 45.385759, Long: -75.698208, Info: ''},
		"LE" : {Name: "Leeds House", Lat: 45.388001, Long: -75.698686, Info: ''},
		"LS" : {Name: "Life Sciences Research Building", Lat: 45.381294, Long: -75.698037, Info: ''},
		"LA" : {Name: "Loeb Building", Lat: 45.3809, Long: -75.699021, Info: '<p><font size="+1">Leob Cafe:</font> Pizza Pizza, Quiznos. <b>1rst Floor</b></p>'},
		"LX" : {Name: "Lennox and Addington House", Lat: 45.386433, Long: -75.697237, Info: ''},
		"ME" : {Name: "Mackenzie Building", Lat: 45.384646, Long: -75.698227, Info: '<font size="+1">Leos:</font> <b>2nd Floor</b>'},
		"ML" : {Name: "MacOdrum Library", Lat: 45.381923, Long: -75.6997, Info: '<p><font size="+1">Starbucks:</font> <b>1rst Floor</b></p>'},
		"MB" : {Name: "Maintenance Building", Lat: 45.384435, Long: -75.694708, Info: ''},
		"MC" : {Name: "Minto Center for Advanced Studies in Engineering (CASE)", Lat: 45.385162, Long: -75.69695, Info: ''},
		"NB" : {Name: "Nesbitt Biology Building", Lat: 45.383911, Long: -75.693496, Info: ''},
		"NW" : {Name: "National Wildlife Research Building", Lat: 45.384096 , Long:-75.692716, Info: ''},
		"PA" : {Name: "Patterson Hall", Lat: 45.381903 , Long:-75.698536, Info: ''},
		"PG" : {Name: "Parking Garage", Lat: 45.383652 , Long:-75.695189, Info: ''},
		"PH" : {Name: "Prescott House", Lat: 45.385716 , Long:-75.697013, Info: ''},
		"RB" : {Name: "River Building", Lat: 45.382386, Long:-75.696315, Info: '<p><img src="THicon.bmp" alt="TH"><font size="+1">Tim Hortons:</font> <b>1rst Floor</b></p>'},
		"RH" : {Name: "Renfrew House", Lat: 45.386116 , Long:-75.697249, Info: ''},	"CO" : {Name: "Residence Commons", Lat:45.387171 , Long:-75.697141, Info: '<p><img src="THicon.bmp" alt="TH"><font size="+1">Tim Hortons:</font> <b>1rst Floor</b></p>'+'<p><font size="+1">The Oasis:</font> Open until 2am. <b>1rst Floor</b> </p>'+'<p><font size="+1">Fresh Food Company:</font> All-you-care-to-eat residence dining center. <b>3rd Floor</b></p>'},
		"RO" : {Name: "Robertson Hall", Lat: 45.383305 , Long: -75.694363, Info: '<p><font size="+1">Bent Coin:</font> Sandwiches, soups, coffee and express items. <b>5th Floor</b></p>'},
		"RU" : {Name: "Russell House", Lat: 45.386929 , Long:-75.698536, Info: ''},
		"SP" : {Name: "St Patricks Building", Lat: 45.387506 , Long:-75.69844, Info: ''},
		"SR" : {Name: "Social Science Research Building", Lat: 45.380389 , Long: -75.699952, Info: ''},
		"SA" : {Name: "Southham Hall", Lat: 45.381154 , Long:-75.699566, Info: ''},
		"SC" : {Name: "Steacie Building", Lat: 45.382774 , Long: -75.696852, Info: ''},
		"SD" : {Name: "Stormont and Dundas House", Lat: 45.387969 , Long:-75.697104, Info: ''},
		"TC" : {Name: "Tennis Center", Lat: 45.388045 , Long:-75.69498, Info: ''},
		"TB" : {Name: "Tory Building", Lat: 45.382653  , Long:-75.698069, Info: ''},
		"UC" : {Name: "University Center", Lat: 45.383354 , Long:-75.697726, Info: '<p><img src="THicon.bmp" alt="TH"><font size="+1">Tim Hortons:</font> <b>1rst Floor & 4th Floor</b></p>'+'<p><font size="+1">Bakers:</font> Full service restaurant serving breakfast and lunch weekdays. <b>4th Floor</b></p>'+'<p><font size="+1">Food Court:</font> Subway, Pizza Pizza, Chef Shawarma, Extreme Pita and much more. <b>2nd Floor</b></p>'+'<p><font size="+1">Starbucks:</font> <b>4th Floor</b></p>'+'<p><font size="+1">Campus Card Office:</font> <b>4th Floor</b></p>'},
		"VS" : {Name: "Visualization & Simulation Building", Lat:45.380498 , Long:-75.70029, Info: ''},
        "P1" : {Name: "Parking Lot P1", Lat: 45.380927, Long:-75.700448, Info: ''},
        "P2" : {Name: "Parking Lot P2", Lat: 45.383564 , Long:-75.69665, Info: ''},
		"P3" : {Name: "Parking Lot P3", Lat: 45.384838 , Long:-75.69268, Info: ''},
		"P4" : {Name: "Parking Lot P4", Lat: 45.385369 , Long:-75.695411, Info: ''},
		"P5" : {Name: "Parking Lot P5", Lat: 45.387667 , Long:-75.693399, Info: ''},
		"P6" : {Name: "Parking Lot P6", Lat: 45.389427 , Long:-75.698688, Info: ''},
		"P7" : {Name: "Parking Lot P7", Lat: 45.390218 , Long:-75.69661, Info: ''},
		'Security Office' : {Name: "Campus Security Office", Lat: 45.381903 , Long:-75.698536, Info: 'Within Robertson Hall. <b>1rst Floor</b>'},
		'Otrain' : {Name: "O-Train", Lat: 45.385294 , Long:-75.69591, Info: ''},
		'MainBusStop' : {Name: "Main Bus Stop", Lat: 45.385256 , Long:-75.696516, Info: '<p><font size="+1">Buses:</font> <b>7</b> St. Laurent</p>'
		+ '<p><b>4</b> Hurdman </p>'+'<p><b>4</b> Rideau Center </p>'+'<p><b>111</b> Baseline </p>'},
		'SteacieBusStop' : {Name: "Steacie Bus Stop", Lat: 45.38434 , Long:-75.696425, Info: '<p><font size="+1">Buses:</font> <b>7</b> St. Laurent</p>'+'<p><b>4</b> Hurdman </p>'+'<p><b>4</b> Rideau Center </p>'+'<p><b>111</b> Baseline </p>'},
		'GymBusStop' : {Name: "Athletics Building Bus Stop", Lat: 45.38549 , Long:-75.694923, Info: '<p><font size="+1">Buses:</font> <b>7</b> St. Laurent</p>'+'<p><b>4</b> Hurdman </p>'+'<p><b>4</b> Rideau Center </p>'+'<p><b>111</b> Baseline </p>'}
  }
		
        
