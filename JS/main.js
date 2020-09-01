$(".menubtn").click(function(){
    $(".mobile").toggleClass("mobile_view");
    $(".profile").toggleClass("blur");
    $(".li").toggleClass("lie");
});

$(".li").click(function(){
    $(".mobile").toggleClass("mobile_view");
    $(".profile").toggleClass("blur");
    $(".li").toggleClass("lie");
});

$("a[href^='#']").click(function(e) {
   e.preventDefault();
   
   var position = $($(this).attr("href")).offset().top;

   $("body, html").animate({
       scrollTop: position
   }, 1000);
});

