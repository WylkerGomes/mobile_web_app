console.log("heelo");


var home1 = document.getElementsByClassName("home_content2");

var home2 = document.getElementsByClassName("home_content");






$('#show1').click(function(){

    $(".home_content1").show("slow");// you can use toggle
    $(".home_content2").hide("slow");
    $(".home_content3").hide("slow");
    $(".home_content4").hide("slow");
    $(".home_content5").hide("slow");
});



$('#show2').click(function(){

    $(".home_content2").show("slow");// you can use toggle
    $(".home_content1").hide("slow");
    $(".home_content3").hide("slow");
    $(".home_content4").hide("slow");
    $(".home_content5").hide("slow");
});


$('#show3').click(function(){

    $(".home_content3").show("slow");// you can use toggle
    $(".home_content1").hide("slow");
    $(".home_content2").hide("slow");
    $(".home_content4").hide("slow");
    $(".home_content5").hide("slow");
});


$('#show4').click(function(){

    $(".home_content4").show("slow");// you can use toggle
    $(".home_content1").hide("slow");
    $(".home_content2").hide("slow");
    $(".home_content3").hide("slow");
    $(".home_content5").hide("slow");
});


$('#show5').click(function(){

    $(".home_content5").show("slow");// you can use toggle
    $(".home_content1").hide("slow");
    $(".home_content2").hide("slow");
    $(".home_content3").hide("slow");
    $(".home_content4").hide("slow");
});