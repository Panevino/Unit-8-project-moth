$(".submit").click(function() {
    let answerone=$(".values").val();
    console.log(answerone);
let answertwo=$(".colors").val();
    console.log(answertwo);

    if (answerone === "Day" && answertwo === "Bright tones") {
    $(".results").text("You're a Oak Eggar (Lasiocampa quercus)!");
    $(".results").prepend(`<img src = "https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-12/28841650526-oak-eggar-lasiocampa-quercus.jpg">`); }

    else if (answerone === "Day" && answertwo === "Dark" || "warm" ) {
    $(".results").text("You're a Emperor moth (Saturnia pavonia)!");
    $(".results").prepend(`<img src = "https://butterfly-conservation.org/sites/default/files/styles/large/public/2018-12/16527602973-saturnia-pavonia.jpg">`); }

    else if (answerone === "Night" && answertwo === "Bright tones" ) {
    $(".results").text("You're a Luna moth (Actias luna)!");
    $(".results").prepend(`<img src = "https://i.ytimg.com/vi/raIexr8EmpY/maxresdefault.jpg">`); } 

    else if (answerone === "Night" && answertwo === "Dark" || "warm" ) {
    $(".results").text("You're a Small Dark Yellow Underwing (Anarta cordigera)!");
    $(".results").prepend(`<img src = "https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-06/4501337518_ed1c1ea0ff_o_0.jpg">`); }
    console.log("blank");
});
