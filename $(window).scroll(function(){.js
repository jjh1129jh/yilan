$(window).scroll(function(){
    if (scrollY > yyPos[3]-1){
        $('.navigation>ul>li>a').removeClass("onLC")
        $('.LC4').addClass("onLC")
        $('.navigation>ul>li>a').stop().animate({
            borderColor : 'rgba(0,0,0,0.3)',
            backgroundColor:'transparent'
        }, 100)
        $('.onLC>span').stop().animate({
            color : 'black'
        }, 100)
        $('.onLC').stop().animate({
            backgroundColor:'black'
        }, 100)
    }
    else if (scrollY < yyPos[2])
        {
        $('.navigation>ul>li>a').removeClass("onLC")
        $('.LC3').addClass("onLC")
        $('.navigation>ul>li>a').stop().animate({
            borderColor : 'rgba(255,255,255,0.5)',
            backgroundColor:'transparent'
        }, 100)
        $('.onLC>span').stop().animate({
            color : 'whitesmoke'
        }, 100)
        $('.onLC').stop().animate({
            backgroundColor:'whitesmoke'
        }, 100)
        }
    else if (scrollY < yyPos[1])
        {
        $('.navigation>ul>li>a').removeClass("onLC")
        $('.LC2').addClass("onLC")
        $('.navigation>ul>li>a').stop().animate({
            borderColor : 'rgba(0,0,0,0.3)',
            backgroundColor:'transparent'
        }, 100)
        $('.onLC>span').stop().animate({
            color : 'black'
        }, 100)
        $('.onLC').stop().animate({
            backgroundColor:'black'
        }, 100)
        }
    else if (scrollY == 0)
    {
        $('.navigation>ul>li>a').removeClass("onLC")
        $('.LC1').addClass("onLC")
        $('.navigation>ul>li>a').stop().animate({
            borderColor : 'rgba(255,255,255,0.5)',
            backgroundColor:'transparent'
        }, 100)
        $('.onLC>span').stop().animate({
            color : 'whitesmoke'
        }, 100)
        $('.onLC').stop().animate({
            backgroundColor:'whitesmoke'
        }, 100)
    }
})