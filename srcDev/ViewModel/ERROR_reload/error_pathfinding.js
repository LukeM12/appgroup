alert("yAy oit works");
function is_dup(array){
	var loc;
	for (var a = 0; a < array.length; a++){\
		loc = array[a].name;
		for  (var i = 0; i < array.length; i++){
			if (loc == array[i].name){
				//do something
				alert("duplicate");
			}
		}
	}
}

function dosomething(){
}

				
