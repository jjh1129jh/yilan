$(function(){
    var swiper = new Swiper(".swiper-container",{
        slidesPerView:1,
        autoplay:{
            delay:3000
        },
        loop:true,
        spaceBetween:20,
        pagination:{
            el:".swiper-pagination",
            clickable:true
        }
    })
    
    lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        disableScrolling: false,
        fitImagesInViewport:false
    })

    // 우측 서치 메뉴 ON
    $(".search>a").click(function(){
        $(".goldbackground1").stop().animate({
            right:"0"
        })
    })
    // 우측 서치 메뉴 OFF
    $(".searchBackground>.close>a").click(function(){
        $(".goldbackground1").stop().animate({
            right:"-100%"
        })
    })

    //우측 메뉴 ON
    $(".hamburger>a").click(function(){
        $(".goldbackground2").stop().animate({
            right:"0"
        })
    })
    //우측 메뉴 OFF
    $(".navclose>a").click(function(){
        $(".goldbackground2").stop().animate({
            right:"-100%"
        })
    })
    
    //모바일 서치 메뉴 ON
    $(".Msearch>a").click(function(){
        $(".goldbackground1").stop().animate({
            right:"0"
        })
    })

    //모바일메뉴 ON
    $(".Mhamburger>a").click(function(){
        $(".goldbackground3").stop().animate({
            right:"0"
        })
    })
    //모바일메뉴 OFF
    $(".Mnavclose>a").click(function(){
        $(".goldbackground3").stop().animate({
            right:"-100%"
        })
    })
    //모바일메뉴 서브메뉴 호버
    $(".Mnav>li").click(function(){
        
        $(this).toggleClass("active").siblings("li").removeClass("active");
        $(this).children(".Msub").slideToggle(300);
        $(this).siblings().children(".Msub").slideUp(300);
    })
})
