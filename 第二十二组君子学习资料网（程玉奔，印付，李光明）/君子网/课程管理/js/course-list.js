$(function () {
    $(".course-tab-select-item").click(function () {
        var select = $(this).data("select");
        var contentList = $(".course-tab-content-item");
        var selectList = $(".course-tab-select-item");
        for(var i=0;i<contentList.length;i++){
            $(selectList[i]).removeClass("active");
        }
        for(i=0;i<contentList.length;i++){
            $(contentList[i]).removeClass("active");
        }
        $(contentList[select]).addClass("active");
        $(selectList[select]).addClass("active");
    });
    $(window).scroll(function () {
        var length = $(window).scrollTop();
        if(length>103){
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