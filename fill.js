var time = new Date();
var dateString = time.getMonth() + '-' + time.getDate() + '-' + time.getUTCFullYear();
var dateInputElement = document.getElementById('date');
dateInputElement.value = dateString;

var options = document.getElementsByClassName("time");
var l = options.length;

for (var i = 0; i <= l; i++) {
    var h = time.getHours(); 
    var m = time.getMinutes();
    if (h > 12)
        h -= 12;
    if (h < options[i].innerHTML[0])
        options[i].disabled = true;
    var mins = options[i].innerHTML[2] +''+ options[i].innerHTML[3];
    if (m >= mins || h >= options[i].innerHTML[0])
        options[i].disabled=true;
    else
        options[i].disabled=false;

}
