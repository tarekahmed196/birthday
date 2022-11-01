var a = prompt("Enter UserName");
var b = prompt("Enter password");
if (a == "Tamu" && b == "02.11.1998") {
	window.location.href = "start.html";
}
else {
	alert("invalid details");
	window.location.href = "index.html";
}
