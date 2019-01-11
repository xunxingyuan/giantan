//加载公共模块
$(document).ready(function () {
    $(".headerBox").load("./../../common/header.html");
    $(".footerBox").load("./../../common/footer.html");
    $(".ctrlItem").bind("click", function (e) {
        var index = $(".ctrlItem").index(this);
        $(".ctrlItem").removeClass("active");
        $(this).addClass("active");
        $(".itemBox").css("display", "none");
        $(".productBg").css("display", "none");
        $(".itemBox:eq(" + index + ")").css("display", "block");
        $(".itemBox").addClass("animated fadeIn");
        $(".productBg").removeClass("animated fadeIn");
        switch (index) {
            case 0:
                $(".productBg").attr("src", "../src/new/home/bg.jpg");
                break;
            case 1:
                $(".productBg").attr("src", "../src/new/home/bg1.jpg");
                break;
            case 2:
                $(".productBg").attr("src", "../src/new/home/bg2.jpg");
                break;
            case 3:
                $(".productBg").attr("src", "../src/new/home/bg3.jpg");
                break;
            case 4:
                $(".productBg").attr("src", "../src/new/home/bg4.jpg");
                break;
            default:
                break;
        }
        $(".productBg").css("display", "block");
        $(".productBg").addClass("animated fadeIn");
    });
});

//修改header背景
$(document).scroll(function (e) {
    if ($(this).scrollTop() === 0) {
        $(".headerBox").css("background", "transparent");
    } else {
        $(".headerBox").css("background", "#142132");
    }
});