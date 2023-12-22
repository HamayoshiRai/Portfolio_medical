$(document).ready(function() {
  var currentIndex = 0;
  var slideCount = $('.slide img').length;
  var intervalId;

  // ドットボタンのクリックイベント
  $('.slide-dots li').click(function() {
    var index = $(this).find('button').data('index');
    changeSlide(index);
    resetInterval();
  });

  // スライドを変更する関数
  function changeSlide(index) {

    // すべてのスライドを非表示
    $('.slide img').css('opacity', 0);

    // アクティブなスライドを変更
    $('.slide img.slide_active').removeClass('slide_active');
    $('.slide img').eq(index).addClass('slide_active');

    // クリックされたドットボタンに対応するスライドを表示
    $('.slide img').eq(index).css('opacity', 1);

    // ドットボタンのアクティブなスタイルの変更
    $('.slide-dots li').removeClass('active');
    $('.slide-dots li').eq(index).addClass('active');

    // クリックされた位置から順番に再生するためにcurrentIndexを更新
    currentIndex = index;
  }

  // スライドショーの自動再生
  setInterval(function() {
    currentIndex = (currentIndex + 1) % slideCount;
    changeSlide(currentIndex);
  }, 5000);

  // clearintervalを使ってsetintervalをリセット
  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      currentIndex = (currentIndex + 1) % slideCount;
      changeSlide(currentIndex);
    }, 5000);
  }

  // 初期時点でのアクティブなスライドを設定
  changeSlide(currentIndex);
});
