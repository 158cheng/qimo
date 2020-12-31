$(function () {
    // djs(3);
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

function toggleLiveStatus() {
    var live_canvas = $(".live-canvas")[0];
    var playing = $(live_canvas).data("playing") + "";
    if(playing == "true"){
        $(live_canvas)[0].pause();
        $(live_canvas).attr("data-playing","false");
        $(live_canvas).data("playing","false");
    }else if(playing == "false"){
        $(live_canvas)[0].play();
        $(live_canvas).attr("data-playing","true");
        $(live_canvas).data("playing","true");
    }
}

$(".live-href-title").click(function () {
    var tab = $(".live-href-list-tab")[0];
    if($(tab).hasClass("hidden")){
        $(tab).removeClass("hidden");
        $(this).find("p").html("Java入门第二季 &or;");
    }else{
        $(tab).addClass("hidden");
        $(this).find("p").html("Java入门第二季 &and;");
    }
});

$(".live-href-title-button").click(function () {
    event.preventDefault();
    var tabToggle = $(this)[0];
    var tabToggleValue = $(tabToggle).data("toggletab") + "";
    var area = $(".live-area")[0];
    if(tabToggleValue == "true"){
        $("section>.live-href").css("right","-360px");
        $(tabToggle).attr("data-toggletab","false");
        $(tabToggle).data("toggletab","false");
        $(tabToggle).html("《");
        $(tabToggle).css("padding-left","0");
        $(area).removeClass("active");
    }else if(tabToggleValue == "false"){
        $("section>.live-href").css("right","0");
        $(tabToggle).attr("data-toggletab","true");
        $(tabToggle).data("toggletab","true");
        $(tabToggle).html("》");
        $(tabToggle).css("padding-left","5px");
        $(area).addClass("active");
    }
    event.stopPropagation();
});

$(".live-href-list-tab-button").click(function () {
    var index = $(this).data("index");
    var buttonList = $(".live-href-list-tab-button");
    var tabList = $(".live-href-list-tab-item");
    var i=0;
    for(;i<buttonList.length;i++){
        $(buttonList[i]).removeClass("active");
    }
    for(i=0;i<tabList.length;i++){
        $(tabList[i]).removeClass("active");
    }
    $(buttonList[index]).addClass("active");
    $(tabList[index]).addClass("active");
});


// function djs(s) {
//     var overTime = s;
//     if(overTime == 0){
//         $(".live-mengban").hide();
//         toggleLiveStatus();
//         return;
//     }
//     setTimeout(function () {
//         var temp = 0;
//         var day = Math.floor(overTime / (60*60*24));
//         temp = overTime % (60*60*24);
//         var shi = Math.floor(temp / (60*60));
//         temp = temp % (60*60);
//         var fen = Math.floor(temp / 60);
//         temp = temp % 60;
//         var timeG = "倒计时 : " + day + "天" + shi + "时" + fen + "分" + temp + "秒";
//         $(".live-mengban-DJS").text(timeG);
//         djs(--overTime);
//     },1000);
// }