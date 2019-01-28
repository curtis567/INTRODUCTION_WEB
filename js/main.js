$(document).ready(function() {
  //滑動
  $(".container").on("click", ".anchor", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      800
    );
  });

  // 文字介紹跑馬燈
  var i = 0;
  function blinker() {
    if (i === 0) {
      $(".blink_me")
        .text("welcome to my website ")
        .fadeIn(500)
        .delay(2000)
        .fadeOut(500);
      i = i + 1;
    } else {
      $(".blink_me")
        .text("Web Design - Front-End Development - Report design")
        .fadeIn(500)
        .delay(2000)
        .fadeOut(500);
      i = i - 1;
    }
  }
  setInterval(blinker, 4000);

  //個頁面進場
  //about
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(".personal-about").offset().top) {
      $(".about").addClass("here");
      $(".intro").fadeIn(800);
      $(".skill").removeClass("here");
    }
  });
  //skill
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(".skill-wrap").offset().top - 10) {
      $(".skill").addClass("here");
      $("#bar").slideDown(1500);
      $(".able").slideDown(1500);
      $(".about").removeClass("here");
      $(".contact").removeClass("here");
      $(".portfolio").removeClass("here");
    }
  });
  //portfolio
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(".portfolio-wrap").offset().top - 10) {
      $(".portfolio-list").fadeIn(800);
      $(".portfolio").addClass("here");
      $(".contact").removeClass("here");
      $(".about").removeClass("here");
      $(".skill").removeClass("here");
    }
  });
  //contact
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(".contact-wrap").offset().top - 10) {
      $(".contact-list").css("margin-left", "0");
      $(".contact-map").css("margin-right", "0");
      $(".contact-form").fadeIn(1500);
      $(".contact").addClass("here");
      $(".about").removeClass("here");
      $(".skill").removeClass("here");
      $(".portfolio").removeClass("here");
    }
  });
  //離開頁面出現gotop按鈕
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {
      $(".arrow-up").fadeIn();
    } else {
      $(".arrow-up").fadeOut();
    }
  });
  //model
  $("#demo01").animatedModal();
  $("#demo02").animatedModal({ modalTarget: "modal-02" });
  $("#demo03").animatedModal({ modalTarget: "modal-03" });
  $("#demo04").animatedModal({ modalTarget: "modal-04" });
  $("#demo05").animatedModal({ modalTarget: "modal-05" });
  $("#demo06").animatedModal({ modalTarget: "modal-06" });
});
var mymap = L.map("map").setView([25.07739, 121.5734446], 14);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  foo: "bar",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 16,
  minZoom: 13
}).addTo(mymap);
L.marker([25.0805711, 121.5793127])
  .addTo(mymap)
  .bindPopup("Home")
  .openPopup();
L.marker([25.0724609, 121.5752358])
  .addTo(mymap)
  .bindPopup("current working")
  .openPopup();
var circle = L.circle([25.0724609, 121.5752358], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 100
}).addTo(mymap);
