
var database = gamesData;

$(document).ready(function () { // this is to show the data in your document. it calls all the functions that you made

});



var template = "";

$.each(gamesData, function (key, value) { // key is what is inside of the object gamesData.so everthing inside is the value of gamesData.
    //console.log(value);

    var uniquemonth = key;
   // console.log(key)

 
    
    
    template += `
                    
                        <div class ="games_dates">
                            <div class ="front">
                                <h2>${key}</h2>
                            </div>

                            <div class ="back">
    
    `;

    $.each(value, function (i, match) {

        template += `
        <details> 
            <summary>${match.match_day +' '+match.date +' '+ match.time}</summary>
              
                    <div class="address">
                        <h3>${match.location}</h3>
                        <p>${match.address}</p> 
                    </div>     
                    <iframe class="goggle_map"
                            src="${match.googleMap}" width="300" height="250" frameborder="1px" style="border:1px" allowfullscreen></iframe>

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




    $(".front h2").click(function () {
    console.log("nice");
    $(".back").toggle("slow");
    
});




$('#login').click(function () {
 
    console.log("hi");
    $(".flex-container").show("slow");
    $(".login_page").hide("slow");
    $(".home").show("slow");
//    $(".front").hide("slow");
});

$('#logout').click(function () {
 
    console.log("bye bye");
    $(".flex-container").hide("slow"); 
    $(".login_page").show("slow");
    $(".settings_page").hide("slow");
//    $(".front").hide("slow");
});

$('#settings').click(function () {
 
    console.log("hi");
    $(".flex-container").show("slow"); 
    $(".settings_page").toggle("slow");
//    $(".front").hide("slow");
});

$('#show_chat').click(function () {

    $(".chat").show("slow"); // you can use toggle
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $("#rules_policies").hide("slow");
//    $(".front").hide("slow");
});



$('#show_matches').click(function () {

    $("#matches").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $("#rules_policies").hide("slow");
    $(".front").show("slow");
});


$('#show_home').click(function () {

    $(".home").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $("#matches").hide("slow");
    $(".contacts").hide("slow");
    $("#rules_policies").hide("slow");
//    $(".front").hide("slow");
});


$('#show_contacts').click(function () {

    $(".contacts").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $("#rules_policies").hide("slow");

});


$('#show_rulesPolicies').click(function () {

    $("#rules_policies").show("slow"); // you can use toggle
    $(".chat").hide("slow");
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".front").hide("slow");

});
