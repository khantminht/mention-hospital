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

    // Start ADv SEcion
    $("#videos").click(function(){
        var getmodal = $(this).data("bs-target")
        var getvideosrc = $(this).data("video");
        var videowithauto = getvideosrc+"?autoplay=1";
        
        $(getmodal + " iframe").attr("src",videowithauto);

        $(getmodal + " button").click(function(){
            $(getmodal+ " iframe").attr("src",getvideosrc);
        });

        $(getmodal).click('hidden.bs.modal',function(){
            $(getmodal+ " iframe").attr("src",getvideosrc);
        });

    })
    // End ADv Section

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


    // Start Join us Section
    $("#accordion").accordion();

    // End Join Us Section


    // Start Footer SEction
    $("#getyear").text(new Date().getUTCFullYear());
    // End Footer SEcion

    // Start Progress
    $(window).scroll(function(){

        var getprogress = $("#progress");
        var getprogressval = $(".progressvalues");

        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        

        //----------By Jquery-----------\\

        // var getscrollheight = $(document).height();
        // console.log(getscrollheight);

        // var getclientheight = $(window).height();
        // console.log(getclientheight);

        // var calcheight = getscrollheight - getclientheight;
        
        // var getfinalheight = Math.round(getscrolltop*100 / calcheight);
        // console.log(getfinalheight);


        //----------By javascript-----------\\

        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight);

        var getclientheight = document.documentElement.clientHeight;
        // console.log(getclientheight);

        var calcheight = getscrollheight - getclientheight;
        
        var getfinalheight = Math.round(getscrolltop*100 / calcheight);
        // console.log(getfinalheight);



        getprogressval.text(`${getfinalheight}%`);

        getprogress.css({
            "background":`conic-gradient(
                steelblue ${getfinalheight}%,
                #eee ${getfinalheight}%
            )`
        });

    });

    // End Progress










    
})