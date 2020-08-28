$(".menubtn").click(function(){
    $(".mobile").toggleClass("mobile_view");
    $(".profile").toggleClass("blur");
    $(".li").toggleClass("lie");
});



$(".button").click(function(p) {
    $("#show").text($(".innerwidths").width());
    alert($(".innerwidths").width());
});