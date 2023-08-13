jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  //要素の取得とスピードの設定
  var box1 = $(".voice-card__image"),
    speed = 700;
  var box2 = $(".top-info__image"),
    speed = 700;
  var box3 = $(".top-price__image-pc"),
    speed = 700;

  // .colorboxの付いた全ての要素に対して下記の処理を行う
  box1.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
  box2.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
  box3.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // ページトップボタンの表示
  var topBtn = $(".pagetop");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      // 指定70px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定70pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る;
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ナビバートグル
  // JavaScript
  $(document).ready(function () {
    $(".js-hamburger").on("click", function () {
      if ($(".js-hamburger").hasClass("is-open")) {
        $(".js-drawer-menu").fadeOut(300); // フェードアウト（200ミリ秒）
        $(this).removeClass("is-open");
        $(".header__inner").removeClass("clicked"); // ヘッダーの背景色を元に戻すためにクラスを削除

        $(".sp-nav__space").hide(); // .sp-nav__spaceを非表示にする
      } else {
        $(".js-drawer-menu").fadeIn(300); // フェードイン（200ミリ秒）
        $(this).addClass("is-open");
        $(".header__inner").addClass("clicked"); // ヘッダーの背景色を変更するためにクラスを追加

        $(".sp-nav__space").show(); // .sp-nav__spaceを表示する
      }
    });

    // グローバルナビメニューのリンクをクリックしたらページを閉じる
    $(".sp-nav__item a").on("click", function () {
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer-menu").fadeOut(300); // フェードアウト（200ミリ秒）

      $(".header__inner").removeClass("clicked"); // ヘッダーの背景色を元に戻す
    });
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  //スクロールでヘッダーの色が変わる

  $(function () {
    $(window).on("scroll", function () {
      if ($(".js-mv").height() < $(this).scrollTop()) {
        $(".js-header").addClass("change-color");
      } else {
        $(".js-header").removeClass("change-color");
      }
    });
  });

  //ローディングアニメーション

  $(document).ready(function () {
    // タイトル要素の表示アニメーション
    $(".loading-animation__title").addClass("fade-in");

    // 左の画像要素の初期位置を設定
    $(".loading-animation__image1").css({ top: "100%", opacity: "0" });

    // 右の画像要素の初期位置を設定
    $(".loading-animation__image2").css({ top: "100%", opacity: "0" });

    // テキスト要素を一度非表示にする
    $(".loading-animation__title").addClass("hidden");

    // 左の画像要素の表示アニメーション
    $(".loading-animation__image1")
      .delay(3000)
      .animate(
        { top: "0", opacity: "1" },
        600,

        function () {
          // z-index の変更
          $(this).css("z-index", "2");

          // 右の画像要素の表示アニメーション
          $(".loading-animation__image2")
            // .delay(100) // 左の画像要素との遅延時間を調整
            .animate({ top: "0", opacity: "1" }, 600, function () {
              // z-index の変更
              $(this).css("z-index", "2");

              // テキスト要素を再表示する
              $(".loading-animation__title")
                .removeClass("hidden")
                .css("z-index", "4");

              // テキストの色変更
              $(".loading-animation__maintitle").addClass("color-change");
              $(".loading-animation__subtitle").addClass("color-change");

              // テキストの再表示アニメーション
              setTimeout(function () {
                $(".loading-animation__title")
                  .delay(5000) // 遅延時間を追加（1秒）
                  .queue(function (next) {
                    $(this).addClass("fade-in");
                    next();
                  })
                  .css("transition", "opacity 3s ease"); // フェードインのアニメーションを適用
              }, 2400);
            });
        }
      );

    // 10秒後にローディングアニメーションを非表示にする
    setTimeout(function () {
      $(".loading-animation").fadeOut();
    }, 10000);
  });

  /* ローディングアニメーションが消えたらスワイパー表示 */
  $(document).ready(function () {
    // スワイパーを非表示にする
    $(".js-mv-swiper").hide();

    // ローディングアニメーションの表示
    $(".loading-animation").show();

    // ローディングアニメーションの非表示化
    setTimeout(function () {
      $(".loading-animation").fadeOut(function () {
        // ローディングアニメーションが完全に非表示になった後にスワイパーを表示する
        $(".js-mv-swiper").show();

        // スワイパーの初期化と更新
        var mvSwiper = new Swiper(".js-mv-swiper", {
          loop: true,
          effect: "fade", // フェード切り替え
          // 自動再生
          autoplay: {
            delay: 4000, // 4秒後に次のスライドへ
            disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
          },
          speed: 2000, // 2秒かけてフェード
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        // .loading-animation__imageを非表示にする
        $(".loading-animation__image").hide();

        // ローディングアニメーションの表示位置を調整
        $(".loading-animation").css("top", "0");
      });
    }, 5000); // ローディングアニメーションの表示時間（5秒）
  });

  /* CPのスライダー  */

  const campaignSwiper = new Swiper(".js-cp-swiper", {
    loop: false,
    spaceBetween: 24,
    slidesPerView: "1",
    speed: 2000,
    loopAdditionalSlides: 2,
    width: 280,

    breakpoints: {
      //ブレークポイントの設定 小さい順に設定する！！
      768: {
        slidesPerView: "3.5",
        spaceBetween: 40,
        width: 1265.5,
      },
      1920: {
        slidesPerView: "5",
        spaceBetween: 40,
        width: 1825,
      },
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
