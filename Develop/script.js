var now = dayjs()
var saveBtn = $('.saveBtn')

$("#currentDay").text(dayjs().format('dddd MMMM D YYYY'));

function timeBlockColor() {
  var hour = dayjs().hour();

  $(".time-block").each(function() {
      var currHour = parseInt($("hour").attr("id"));

      if (hour < currHour) {
          $(this).addClass("future");
      } else if (hour === currHour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

saveBtn.on("click", function() {

  console.log(this); //save button
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".description").val();
  localStorage.setItem(time, plan);
});



timeBlockColor();
