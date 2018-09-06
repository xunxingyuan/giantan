//加载公共模块
$(document).ready(function () {
    $(".headerBox").load('./../../common/header.html');
    $(".footerBox").load('./../../common/footer.html');
});

//修改header背景
$(document).scroll(function(e){
    if($(this).scrollTop()=== 0){
        $('header').css('background','transparent');
    }else{
        $('header').css('background','#142132');
    }
});