$(document).ready(function(){

    // Start Banner Section 
    $(".carousel").carousel({
        interval:2000
    });
    // End Banner Section 


    // Start Info SEction
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();

        // console.log(getscrollpoint);

        if( getscrollpoint >= 420){
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    })
    // End Info SEction

    // Start Premises SEction

    $("#lightslider").lightSlider({
        item:4,
        auto:true,
        loop:true,
        slideMove:1,
        speed:600
    });
    
    // End Premises SEction


    // Start Pricing SEction

    $(window).scroll(function(){

        var getscroll = $(this).scrollTop();
        // console.log(getscroll); 

        if (getscroll >= 2500){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms")
            $(".cardthrees").addClass("moverights")
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms")
            $(".cardthrees").removeClass("moverights")
        }
    })

    // End Pricing SEction
















    
})