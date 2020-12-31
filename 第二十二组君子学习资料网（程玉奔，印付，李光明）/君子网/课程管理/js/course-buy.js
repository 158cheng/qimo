$(function(){
    $('#daohang li').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).children('a').attr("href")).offset().top-120}, 500);
        return false;
    });
    new WOW().init();/*滚动触发动画*/

    $(".nav-title a").mouseover(function(){
        $(this).children("span").css("display","none");
        $(this).children(".l").css("display","block");
    });
    $(".nav-title a").mouseout(function(){
        $(this).children("span").css("display","none");
        $(this).children(".r").css("display","block");
    });
    $('.carousel').carousel('pause');   //关闭自动轮播
    $('.tab-header li').click(function () {
        $('.tab-header li').children("span").css("background-color","#fff");
        $('.tab-header li').children("span").css("color","#e14558");
        $('.tab-header li').children("i").css("display","none");
        $(this).children("span").css("background-color","#e14558");
        $(this).children("span").css("color","#fff");
        $(this).children("i").css("display","block");
    });
    $(window).scroll(function () {
        var length = $(window).scrollTop();
        if(length>203){
            $('.ce').slideDown("slow");
        }else{
            $('.ce').slideUp("slow");
        }
    });
    $('.page8-tab-header li').click(function () {
        $('.page8-tab-header li').css("color","#999");
        $('.page8-tab-header li').css("border-bottom","none");
        $('.page8-tab-header li').css("border-bottom","none");
        $(this).css("color","#e04258");
        $(this).css("border-bottom","2px solid #e04258");
    })
    $('.ce_content a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    })
});