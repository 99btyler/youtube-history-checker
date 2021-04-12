document.getElementById("search").onclick = function(element) {

	if (confirm("Copy text to clipboard and open the \"search watch history\" page?")) {

		document.getElementById("input").select();
		document.execCommand("copy");
		window.open("https://www.youtube.com/feed/history");
		
	}

};
