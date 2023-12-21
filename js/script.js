$(document).ready(function() {
  var currentIndex = 0;
  var slideCount = $('.slide img').length;

  // ドットボタンのクリックイベント
  $('.slide-dots li').click(function() {
    var index = $(this).find('button').data('index');
    changeSlide(index);
  });

  // スライドを変更する関数
  function changeSlide(index) {
    currentIndex = index;

    // すべてのスライドを非表示
    $('.slide img').css('opacity', 0);

    // クリックされたドットボタンに対応するスライドを表示
    $('.slide img').eq(currentIndex).css('opacity', 1);

    // ドットボタンのアクティブなスタイルの変更
    $('.slide-dots li').removeClass('active');
    $('.slide-dots li').eq(currentIndex).addClass('active');
  }

  // スライドショーの自動再生
  setInterval(function() {
    currentIndex = (currentIndex + 1) % slideCount;
    changeSlide(currentIndex);
  }, 5000);
});
