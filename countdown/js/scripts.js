var clock;

$(document).ready(function() {

  // Grab the current date
  var currentDate = new Date();

  // Set some date in the future. In this case, it's always Jan 1
  var futureDate  = new Date("Oct 12, 2017 17:30:00");

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });

  $("#preview").click(function(){
    $(this).text(function(i, text){
          return text === "Wanna see what happens when he goes?" ? "Quick! Click again to hide it!" : "Wanna see what happens when he goes?";
      })
    $("div.container").toggleClass("previewing");
});

  // If the count down is over, write some text
  if (diff < 0) {
      $("#preview").hide();
      $(".clock-container").hide();
      document.getElementById("intro").innerHTML = "Good Luck J@m3s#!";
      $("div.container").toggleClass("previewing");
  }
});
