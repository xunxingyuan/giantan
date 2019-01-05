//加载公共模块
$(document).ready(function () {
    $(".headerBox").load('./../../common/header.html');
    $(".footerBox").load('./../../common/footer.html');

    $('.ctrlItem').bind('click', function (e) {
        console.log(e)
        $('.ctrlItem').removeClass('active')
        $(this).addClass('active')
    });
});

//修改header背景
$(document).scroll(function (e) {
    if ($(this).scrollTop() === 0) {
        $('.headerBox').css('background', 'transparent');
        // $('.headerBox').css('border', 'none');
        // $('.navBox .link').css('color', '#fff');
    } else {
        $('.headerBox').css('background', '#142132');
        // $('.headerBox').css('border-bottom', 'solid 1px #ddd');
        // $('.navBox .link').css('color', '#333');
    }

});