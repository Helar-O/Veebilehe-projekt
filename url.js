# Kood võetud lehelt https://stackoverflow.com/questions/49618618/copy-current-url-to-clipboard

function copy() {
	var Url = document.getElementById("url");
	Url.innerHTML = window.location.href;
	console.log(Url.innerHTML)
	Url.select();
	document.execCommand("copy");
}