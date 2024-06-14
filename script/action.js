//페이드효과
setInterval(function(){
    $('.slide li').eq(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)
    $('.slide li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)
    $('.slide li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500)
})



//공지사항과 갤러리
$('#gal').click(function(){
    $('.gallery').show()
    $('.notice').hide()

    $('#noti').removeClass()
    $('#gal').addClass('on')
})

$('#noti').click(function(){
    $('.gallery').hide()
    $('.notice').show()
    
    $('#noti').addClass('on')
    $('#gal').removeClass()
})




//팝업
$('.notice li').eq(0).click(function(){
    $('.popup').show();
})

$('.popup a').click(function(){
    $('.popup').hide();
})