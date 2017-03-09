$(document).ready(function () {
  $('button').click(function(){
    document.location.reload();

  });
  var count = 0;
  var col1 = [$('#05'), $('#04'), $('#03'), $('#02'), $('#01'), $('#00')];
  var col2 = [$('#15'), $('#14'), $('#13'), $('#12'), $('#11'), $('#10')];
  var col3 = [$('#25'), $('#24'), $('#23'), $('#22'), $('#21'), $('#20')];
  var col4 = [$('#35'), $('#34'), $('#33'), $('#32'), $('#31'), $('#30')];
  var col5 = [$('#45'), $('#44'), $('#43'), $('#42'), $('#41'), $('#40')];
  var col6 = [$('#55'), $('#54'), $('#53'), $('#52'), $('#51'), $('#50')];

  function isEven(num) {
    return parseInt(num) % 2 === 0;
  }

  $('.column1 .circle').click(function() {
    count++;

    var circleClass = (isEven(count)) ? 'blue' : 'red';

    for (var i = 0; i < col1.length; i++) {
      var currentCircle = col1[i];

      if (currentCircle.hasClass('red') || currentCircle.hasClass('blue')) {
        continue;
      } else {
        currentCircle.addClass(circleClass);
        break;
      }
    }
  });

  $('.column2 .circle').click(function() {
      // console.log(col1[5].val());
    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
      // $(this).addClass(circleClass);

    for (var i = 0; i < col2.length; i++) {
      var currentCircle = col2[i];

      if (currentCircle.hasClass('red') || currentCircle.hasClass('blue')) {
        continue;
      } else {
        currentCircle.addClass(circleClass);
        break;
      }
    }
  });

  $('.column3 .circle').click(function() {
      // console.log(col1[5].val());
    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
      // $(this).addClass(circleClass);

    for (var i = 0; i < col3.length; i++) {
      var currentCircle = col3[i];

      if (currentCircle.hasClass('red') || currentCircle.hasClass('blue')) {
        continue;
      } else {
        currentCircle.addClass(circleClass);
        break;
      }
    }
  });

  $('.column4 .circle').click(function() {
      // console.log(col1[5].val());
    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
      // $(this).addClass(circleClass);

    for (var i = 0; i < col4.length; i++) {
      var currentCircle = col4[i];

      if (currentCircle.hasClass('red') || currentCircle.hasClass('blue')) {
        continue;
      } else {
        currentCircle.addClass(circleClass);
        break;
      }
    }
  });

  $('.column5 .circle').click(function() {
      // console.log(col1[5].val());
    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
      // $(this).addClass(circleClass);

    for (var i = 0; i < col5.length; i++) {
      var currentCircle = col5[i];

      if (currentCircle.hasClass('red') || currentCircle.hasClass('blue')) {
        continue;
      } else {
        currentCircle.addClass(circleClass);
        break;
      }
    }
  });

  $('.column6 .circle').click(function() {
      // console.log(col1[5].val());
    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
      // $(this).addClass(circleClass);

    for (var i = 0; i < col6.length; i++) {
      var currentCircle = col6[i];

      if (currentCircle.hasClass('red') || currentCircle.hasClass('blue')) {
        continue;
      } else {
        currentCircle.addClass(circleClass);
        break;
      }
    }
  });
});
