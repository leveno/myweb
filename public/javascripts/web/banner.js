$(document).ready(function(){
    // $('.banner .pointer li').hover(function(){
    //     var self = $(this)
    //     var index = self.data('index')
    //
    //     self.parent('ul.pointer').siblings('img').eq(index).addClass('active').siblings('img').removeClass('active')
    //     self.find('span').addClass('active').parent('li').siblings('li').find('span').removeClass('active')
    // })
    //
    // setInterval(function(){
    //     var self = $('.contain li span.active ')
    //     var index = self.parent('li').data('index')
    //     var length = self.parent('ul.pointer').find('li').length
    //     self.parents('ul.pointer').siblings('img').eq(index).removeClass('active')
    //     self.removeClass('active').parents('ul.pointer').find('li')
    //     if (index < length - 1) {
    //         $('.contain img').eq(index + 1).addClass('active')
    //         $('.contain li').eq(index + 1).find('span').addClass('active')
    //     }else {
    //         $('.contain img').eq(0).addClass('active')
    //         $('.contain li').eq(0).find('span').addClass('active')
    //     }
    // },3000)
    var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical',
        loop: true,
        autoplay:false,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
})