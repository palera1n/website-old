$( ".window" ).draggable({ handle: ".window-titlebar" }).resizable();

$('html').bind('mousedown', function() {
  $('.window').addClass('deactive');
});

$('.window').bind('mousedown', function(event){
  event.stopPropagation();
  $(this).removeClass('deactive');
});

//bind the close button to the close function
$ ( ".window-close" ).click(function() {
    $(this).parent().parent().parent().hide();
});
function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}
function openFaq() {
    // if on mobile, open the faq.html page
    if (detectMob()) {
        window.location.href = "faq.html";
    } else {
      var faq = document.getElementById("faq");
      // remove the display none from the faq
      faq.style.display = "block";
    }
}