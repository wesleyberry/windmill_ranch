window.onscroll = function () { scrollFunction() };

// Makes nav small on-scroll
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "100px";
  } else {
    document.getElementById("logo").style.height = "120px";
  }
}