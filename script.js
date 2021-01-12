var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm a')
$('#currentTime').text('It is '+ currentTime)







var saveBtn = $(".saveBtn");
var time = moment();
var timeBlock = $('.time-block')
var toDos = [];



function setPlanner() {
     $(".time-block").each(function () {
    var storedtoDos = JSON.parse(localStorage.getItem("toDos"));

    if (storedtoDos !== null) {
      toDos = storedtoDos;
    }
    for(var i = 0; i < toDos.length; i++) {
      var userDescription = toDos[i].description;
      $("#" + toDos[i].time).children(".description").text(userDescription);
    }

})
}
setPlanner();


saveBtn.on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    var dateAdded = moment().format("dddd, MMMM Do");

    toDos.push({description: value, time: time, date: dateAdded});


    localStorage.setItem("toDos", JSON.stringify(toDos));
});

function pastPresentFuture() {
    var hour = time.hours();
    console.log(hour);
    timeBlock.each(function () {
        var thisHour = parseInt($(this).attr("data-value"));
        console.log(thisHour);

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("future");
        }
    })
}

pastPresentFuture();
