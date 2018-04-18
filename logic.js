
var database = gamesData;

$(document).ready(function () { // this is to show the data in your document. it calls all the functions that you made

});



var template = "";

$.each(gamesData, function (key, value) { // key is what is inside of the object gamesData.so everthing inside is the value of gamesData.
    //console.log(value);

    var uniquemonth = key;
   // console.log(key)

    template += `
                    <div class="flip3D">
                        <div class="month">
                            <div class ="front">                 
                                <h2>${key}</h2>
                            </div>
                            <div class ="back">
    
    `;

    $.each(value, function (i, match) {

        template += `
        <details> 
            <summary>${match.match_day +' '+match.date +' '+ match.time}</summary>
            <section class="row">
                <section class="game_location">
                    <div class="address">
                        <h3>${match.location}</h3>
                        <p>${match.address}</p> 
                    </div>     
                    <iframe class="goggle_map"
                            src="${match.googleMap}" width="300" height="250" frameborder="1px" style="border:1px" allowfullscreen></iframe>
                </section>      
            </section>
        </details>
`;
    })

    template += `

            <br> 

                 </div>
            
        </div>
`;




});

document.getElementById("matches").innerHTML = template;

//$('.back').click(function () {
// 
//    console.log("hi");
//    $(".back").hide("slow"); 
//    $(".back").style.display = "none";
//    $(".front").show("slow");
//    
//});



$('#login').click(function () {
 
    console.log("hi");
    $(".flex-container").show("slow");
    $(".login_page").hide("slow");
    $("#matches").show("slow");
});

$('#logout').click(function () {
 
    console.log("bye bye");
    $(".flex-container").hide("slow"); 
    $(".login_page").show("slow");
    $(".settings_page").hide("slow");
});

$('#settings').click(function () {
 
    console.log("hi");
    $(".flex-container").show("slow"); 
    $(".settings_page").toggle("slow");
});

$('#show_chat').click(function () {

    $(".chat").show("slow"); // you can use toggle
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});



$('#show_matches').click(function () {

    $("#matches").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_home').click(function () {

    $(".home").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $("#matches").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_contacts').click(function () {

    $(".contacts").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_rulesPolicies').click(function () {

    $(".policies_rules").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
});
