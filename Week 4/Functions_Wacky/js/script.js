//functions assignment - Wacky - Taylor Cawiezell - 06/26/2013

// We need to find out if we can watch the entire first season of my little pony on netflix from out phone.



// setting function paramiters
function ponyWatch(episodeD, episodeSeason, data){



// making if statement
if(episodeD * episodeSeason === data){
	
	prompt("You have just enough data to watch the entire first season.")
	
	
	
	
	// making else if statment
}else if(episodeD * episodeSeason > data){
	alert( episodeSeason * episodeD  - data + " more megabytes are needed to watch the first season.")




// making else statement
}else{ 
	alert("You have more that enought to watch the first season.")
}
};


// setting aurgument
ponyWatch( 1500, 26, prompt("How many gb's are on your data plan?") * 1000 );



	
	
	
