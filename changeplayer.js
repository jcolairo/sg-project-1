
$(document).ready(function () {

  $('.circle').click(function() {
    $(this).addClass('red');
  });

  $('.circle').dblclick(function() {
    $(this).addClass('blue');
  });

});
