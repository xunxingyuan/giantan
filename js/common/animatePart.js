window.onscroll = function () {
    //滚动条高度+视窗高度 = 可见区域底部高度
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    //可见区域顶部高度
    var visibleTop = window.scrollY;
    $(".animatePart").each(function () {
        var offset = $(this).offset();
        var top = offset.top;
        var height = $(this).height();
        if (top + height / 2 > visibleTop && top + height / 2 < visibleBottom) {
            if (!$(this).hasClass('animated')) {
                $(this).addClass("animated fadeInUp");
            }
        }
    });
};