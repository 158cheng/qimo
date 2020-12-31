$(function(){
    // var $bian = $('.floor-side-list ul li');
    // $bian.bind({
    //    mouseover:function () {
    //        $(this).css("color","#f20d0d");
    //        $(this).css("border-bottom","#f20d0d");
    //    },
    //    mouseout:function () {
    //        $(this).css("color","#545c63");
    //        $(this).css("border-bottom","none");
    //    }
    // });
    var show = $(".floor-side-body");
    $(".floor-side-list ul li").each(function (index) {
        $(this).click(function () {
                $(".floor-side-list ul li").css("color","#545c63");
                $(".floor-side-list ul li").css("border-bottom","none");
                $(this).css("color","#f20d0d");
                $(this).css("border-bottom","2px solid #f20d0d");
            $(show).children("ul").slideUp();
            $(show).children("ul").eq(index).slideDown();
        });
    });
    $(window).scroll(function () {
        var length = $(window).scrollTop();
        if(length>203){
            $('.ce').slideDown("slow");
        }else{
            $('.ce').slideUp("slow");
        }
    });
    $('.ce').click(function () {
        if ($(window).scrollTop() > 0) {
            $("html,body").stop().animate({ scrollTop: 0 }, 600);
        }
    });
});