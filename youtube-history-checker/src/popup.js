
document.getElementById("copy").onclick = function(element) {

	document.getElementById("input").select();
	document.execCommand("copy");
	window.open("https://www.youtube.com/feed/history");

};
