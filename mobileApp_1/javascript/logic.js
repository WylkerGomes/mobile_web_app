console.log("heelo");






























$('#show_aboutUs').click(function(){

    $(".aboutUs").show("slow");// you can use toggle
    $(".matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});



$('#show_matches').click(function(){

    $(".matches").show("slow");// you can use toggle
    $(".aboutUs").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_home').click(function(){

    $(".home").show("slow");// you can use toggle
    $(".aboutUs").hide("slow");
    $(".matches").hide("slow");
    $(".contacts").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_contacts').click(function(){

    $(".contacts").show("slow");// you can use toggle
    $(".aboutUs").hide("slow");
    $(".matches").hide("slow");
    $(".home").hide("slow");
    $(".policies_rules").hide("slow");
});


$('#show_rulesPolicies').click(function(){

    $(".policies_rules").show("slow");// you can use toggle
    $(".aboutUs").hide("slow");
    $(".matches").hide("slow");
    $(".home").hide("slow");
    $(".contacts").hide("slow");
});