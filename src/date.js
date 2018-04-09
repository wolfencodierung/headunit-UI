var sep = "  "; 
var ampm;
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var wkDay =  days[d.getDay()];
var month = months[d.getMonth()];
var mDay = d.getDate();
var year = d.getFullYear();

document.getElementById("date").innerHTML = wkDay + ", " + month + sep + mDay + "," + sep + year + sep;