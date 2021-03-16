$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

window.cont = function cont() {
  if (document.getElementById('cont').style.display == 'none') {
    document.getElementById('cont').style.display = 'block';
  } else {
    document.getElementById('cont').style.display = 'none';
  }
}

var btn = $('#button');

$(window).scroll(function () {  
  if ($(window).scrollTop() > 0) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }  
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '0');
});

var d = new Date();
document.getElementById("time").innerHTML = d;