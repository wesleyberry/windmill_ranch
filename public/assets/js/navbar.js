window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").style.height = "100px";
      } else {
        document.getElementById("logo").style.height = "140px";
      }
}