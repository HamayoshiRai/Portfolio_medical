$(function(){
  $('.btn-list li').click(function(){

    // hideで一度figure imgを消す
    $("figure img").hide();

    // src属性を今crickしたhref属性に入替える
    $("figure img").attr("src", $(this).attr("href"));

    // フェードインで表示
    $("figure img").fadeIn(1000);

    $('.active').removeClass('active');
    $(this).addClass('active');

  });
});