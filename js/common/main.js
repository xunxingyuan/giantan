//加载公共模块
$(document).ready(function () {
    $(".headerBox").load('./../../common/header.html');
    $(".footerBox").load('./../../common/footer.html');
    $('.ctrlItem').bind('click', function (e) {
        var index = $('.ctrlItem').index(this)
        $('.ctrlItem').removeClass('active');
        $(this).addClass('active');
        $('.itemBox').css('display', 'none');
        $(".itemBox:eq(" + index + ")").css('display', 'block');
        switch (index) {
            case (0):
                $('.productBox').css('background-image', "url(../src/new/home/bg.jpg)");
                break;
            case (1):
                $('.productBox').css('background-image', "url(../src/new/home/bg1.jpg)");
                break;
            case (2):
                $('.productBox').css('background-image', "url(../src/new/home/bg2.jpg)");
                break;
            case (3):
                $('.productBox').css('background-image', "url(../src/new/home/bg3.jpg)");
                break;
            default:
                break;
        }
    });
});

//修改header背景
$(document).scroll(function (e) {
    if ($(this).scrollTop() === 0) {
        $('.headerBox').css('background', 'transparent');
    } else {
        $('.headerBox').css('background', '#142132');
    }
});