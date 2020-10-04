
document.getElementById("search").onclick = function(element) {

	document.getElementById("input").select();
	document.execCommand("copy");
	alert("Text copied to clipboard. Click OK to open history, then paste text in the \"search watch history\"");

	window.open("https://www.youtube.com/feed/history");

};