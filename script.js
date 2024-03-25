var time = 0;


$(".enter").click(function() {
    var age = Number($(".age").val());
    if(age <= 18) {
        $(".list").append("<li>" + "You are Ryan Gosling" + "</li>");
    } else if(age <= 20){
        $(".list").append("<li>" + "You are Patrick Bateman" + "</li>");
    } else if(age <= 30){
        $(".list").append("<li>" + "You are the Joker" + "</li>");
    } else if(age <= 60){
        $(".list").append("<li>" + "You are Batman" + "</li>");
    } else{
        $(".list").append("<li>" + "N/A" + "</li>");
    }
   time += 1;
   $(".number").text("Number of times taken: " + time);

});

$(".reset").click(function() {
    $(".list").empty()
    time = 0;
    $(".number").empty();
});






