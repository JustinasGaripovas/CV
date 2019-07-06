$(document).ready(function() {
  setInterval(dateTime, 1000);
});

function dateTime() {
  var format="";
  var ndate = new Date();
  var hr = ndate.getHours();
  var h = hr % 12;

  if (hr < 12)
    greet = 'Good Morning';
  else if (hr >= 12 && hr <= 17)
    greet = 'Good Afternoon';
  else if (hr >= 17 && hr <= 24)
    greet = 'Good Evening';

  $(".day-message").html(greet);
}
