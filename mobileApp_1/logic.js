var database = gamesData;



$(document).ready(function () { // this is to show the data in your document. it calls all the functions that you made





});









//var myMembers = data.results[0].members;
//
//var template = "";
//
//for(var i= 0; i < myMembers.length; i++){
//
//    template += `
//            <tr>
//                <td class="cell"> ${myMembers[i].first_name} </td>
//                <td> ${myMembers[i].last_name} </td>
//                <td class="third">${myMembers[i].party}</td>
//                <td>${myMembers[i].state}</td>
//            </tr>
//    
//    `;
//
//}
//
//document.getElementById("myBody").innerHTML= template;







//console.log(gamesData);
//var data =gamesData;
var template = "";
//var uniquemonth = [];




$.each(gamesData, function (key, value) { // key is what is inside of the object gamesData.so everthing inside is the value of gamesData.
    //console.log(value);

    var uniquemonth = key;
    console.log(key)

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
        </div>


`;





    //if($.inArray(value.month, uniquemonth) === -1) uniquemonth.push(value.month);




});

document.getElementById("matches").innerHTML = template;









$('#show_aboutUs').click(function () {

    $(".aboutUs").show("slow"); // you can use toggle
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});



$('#show_matches').click(function () {

    $("#matches").show("slow"); // you can use toggle
    $(".aboutUs").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_home').click(function () {

    $(".home").show("slow"); // you can use toggle
    $(".aboutUs").hide("slow");
    $("#matches").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_contacts').click(function () {

    $(".contacts").show("slow"); // you can use toggle
    $(".aboutUs").hide("slow");
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_rulesPolicies').click(function () {

    $(".policies_rules").show("slow"); // you can use toggle
    $(".aboutUs").hide("slow");
    $("#matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
});
