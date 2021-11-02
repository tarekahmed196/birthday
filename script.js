var a = prompt("Enter UserName");
var b = prompt("Enter password");
if (a == "Koly" && b == "03-11-1998") {
	window.location.href = "start.html";
}
else {
	alert("invalid details");
	window.location.href = "index.html";
}
