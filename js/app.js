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




















    
})