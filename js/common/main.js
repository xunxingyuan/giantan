//加载公共模块
$(document).ready(function () {
    $(".headerBox").load('./../../common/header.html');
    $(".footerBox").load('./../../common/footer.html');
});

//修改header背景
$(document).scroll(function(e){
    if($(this).scrollTop()=== 0){
        $('.headerBox').css('background','transparent');
        $('.navBox a').css('color','#fff');
    }else{
        $('.headerBox').css('background','#fff');
        $('.navBox a').css('color','#333');
    }
});