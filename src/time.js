window.addEventListener('DOMContentLoaded', function digi() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  document.getElementById("time").innerHTML = hour+":"+minute+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("time").innerHTML = hour+":"+minute+" PM";
  }
}
else {
  document.getElementById("time").innerHTML = hour+":"+minute+" AM";
}
var time = setTimeout(digi,1000);
})
