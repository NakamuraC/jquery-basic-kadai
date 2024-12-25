$(window).on('road',function(){
    console.log('roadイベントが発生しました');
});

$(function(){
   $(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
   });
   
})
