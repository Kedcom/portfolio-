
    // window.onscroll = function() {scrollFunction()};

    window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("Top").style.display = "block";
  } else {
    document.getElementById("Top").style.display = "none";
  }
}

function TopButton() {
  document.documentElement.scrollTop = 0;
}


//  NOTE  ------------//
// The condition document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 checks if the vertical scroll position of the document is greater than 20 pixels from the top. Let me break it down:

// document.body.scrollTop: This property represents the number of pixels that the document's body has been scrolled vertically.