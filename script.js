// adding current day and month to header using dayjs
var todaysDate = dayjs().format('dddd, MMMM D YYYY');
$("#currentDay").text(todaysDate);

$(document).ready(function () {
  // saveBtn listener
  $(".saveBtn").on("click", function () {
    // get values of the description
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  function timeChecker() {
    //current time in hours
    var currentTime = dayjs().format('H')
    // loop and get hour from each time block
    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      // compare current time with block time to apply class stylings
      if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime == currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
    //retrieve data from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    timeChecker();
});