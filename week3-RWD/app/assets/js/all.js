$(document).ready(function() {

  $('.ham-menu-trigger').click(function(e) {
    e.preventDefault();
    $('.ham-menu').toggleClass('show');
  });

  $(document).mouseup(function (e) {
    var container = $('.ham-menu');
    var trigger = $('.ham-menu-trigger');
    if ( !trigger.is(e.target) && trigger.has(e.target).length === 0) {
      container.removeClass('show'); 
    };
  });

  // 隱藏所有的 li 內文
  $('.qalist__item__body').hide();
  // 預設讓第一個 li 加上 active
  $('.qalist__item').eq(0).addClass('active');
  // 預設讓第一個 li 內文 顯示
  $('.qalist__item__body').eq(0).show();

  // 點擊 header
  $('.qalist__item__header').click(function (e) {
    // 取消預設 event 事件
    e.preventDefault(); 
    // 加上 active 屬性，並把其他有 active 的移除
    $(this).parent().toggleClass('active').siblings().removeClass('active');
    // 讓自己的 li body 切換收合
    $(this).parent().children().next().slideToggle();
    // 讓其他 li body 收合
    $(this).parent().siblings().children().next().slideUp();
  })
});