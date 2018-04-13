        var d = new Date();
        var sep = " "
        var sep2 = ", "
        
        /* Date Section */
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var wkDay = days[d.getDay()];
        var month = months[d.getMonth()];
        var mDay = d.getDate();
        var year = d.getFullYear();
        
        document.getElementById("date1").innerHTML = wkDay;
        document.getElementById("date2").innerHTML = month + sep + mDay + sep2 + year;
        