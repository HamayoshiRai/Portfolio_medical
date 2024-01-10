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

// タブ切り替え
document.addEventListener("DOMContentLoaded", function () {
  // タブメニューの要素を取得
  var tabMenu = document.getElementById("tabMenu");

  // クリックイベントを設定
  tabMenu.addEventListener("click", function (e) {
      // クリックされた要素がリンクである場合のみ処理を実行
      if (e.target.tagName === "A") {
          e.preventDefault();

          // クリックされたタブに対応するコンテンツを表示
          var targetId = e.target.getAttribute("data-id");

          // すべてのコンテンツを非表示にする
          var contents = document.querySelectorAll(".content");
          contents.forEach(function (content) {
              content.classList.remove("active");
          });

          // クリックされたタブに対応するコンテンツを表示
          var targetContent = document.getElementById(targetId);
          targetContent.classList.add("active");

          // タブのアクティブ状態を切り替える
          var tabs = tabMenu.querySelectorAll("a");
          tabs.forEach(function (tab) {
              tab.classList.remove("active");
          });
          e.target.classList.add("active");
      }
  });
});


// スクロール時のふわっと表示
$(window).on("scroll", function() {

  // すべての .scroll-block を取得
  const item = $(".scroll-block");

  item.each(function() {

    // .item のオフセットの高さを取得
    const targetTop = $(this).offset().top;

    // 画面のスクロール量 + 500px > .item のオフセットの高さを取得
    if ($(window).scrollTop() + 500 > targetTop) {

      // .item にクラス .show を追加
      $(this).addClass("blockIn");
    }
  });
});

// menu-btnをクリックしたらgnavにis-activeを付与
$(function(){
  $('.menu-btn').on('click', function(){
    $('.gnav').toggleClass('is-active');
  });
}());

// menu-btnをクリックしたらそれににactiveを付与
$(function(){
  $('.menu-btn').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});
