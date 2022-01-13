$(document).ready(function(){

    // preloader  jquery
    $(window).on("load", function(){
        $('.preloader').css({
            
            "height":"0vh",    
    
    });

    });

    

    // custom cursor

    $(document).mousemove(function(e){
        $('.cursor').eq(1).css({ "left": e.pageX, "top": e.pageY });
        $('.cursor').eq(2).css({ "left": e.pageX, "top": e.pageY });
        
        setTimeout(function(){
            
            $('.cursor').eq(0).css({ "left": e.pageX, "top": e.pageY });

        },100)


    });

    $(document).click(function(){
        $('.cursor-expand').addClass('cursor-click');

        setTimeout(function(){
            $('.cursor-expand').removeClass('cursor-click');
        },500)

    });

    // cursor z index solution
    $('.profile, .skills, .port-main').on("mouseenter", function(){
        $('.cursor').css("z-index","10");
    });
     $('.profile, .skills, .port-main').on("mouseleave", function(){
        $('.cursor').css("z-index","-1");
    });
        

    


    // portfolio menu active 

        $('.port-menu ul li').on("click", function(){
            
                $(this).addClass('active').siblings().removeClass('active');

   
        });





        // portfolio mixitup
        var mixer = mixitup('.port-main');
    

   



});