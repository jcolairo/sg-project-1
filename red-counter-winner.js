$(document).ready(function () {

  var c00 = $('#00');
  var c01 = $('#01');
  var c02 = $('#02');
  var c03 = $('#03');
  var c04 = $('#04');
  var c05 = $('#05');

  var c10 = $('#10');
  var c11 = $('#11');
  var c12 = $('#12');
  var c13 = $('#13');
  var c14 = $('#14');
  var c15 = $('#15');

  var c20 = $('#20');
  var c21 = $('#21');
  var c22 = $('#22');
  var c23 = $('#23');
  var c24 = $('#24');
  var c25 = $('#25');

  var c30 = $('#30');
  var c31 = $('#31');
  var c32 = $('#32');
  var c33 = $('#33');
  var c34 = $('#34');
  var c35 = $('#35');

  var c40 = $('#40');
  var c41 = $('#41');
  var c42 = $('#42');
  var c43 = $('#43');
  var c44 = $('#44');
  var c45 = $('#45');

  var c50 = $('#50');
  var c51 = $('#51');
  var c52 = $('#52');
  var c53 = $('#53');
  var c54 = $('#54');
  var c55 = $('#55');

  var col1 = [c00,c01,c02,c03,c04,c05];
  var col2 = [c10,c11,c12,c13,c14,c15];
  var col3 = [c20,c21,c22,c23,c24,c25];
  var col4 = [c30,c31,c32,c33,c34,c35];
  var col5 = [c40,c41,c42,c43,c44,c45];
  var col6 = [c50,c51,c52,c53,c54,c55];

  var arrayObject = [
    col1,
    col2,
    col3,
    col4,
    col5,
    col6
  ];
  console.log(arrayObject);
  console.log(arrayObject[0][0]);

  var circles = {};
  var counters = [
    '00', '01', '02', '03', '04', '05',
    '10', '11', '12', '13', '14', '15',
    '20', '21', '22', '23', '24', '25',
    '30', '31', '32', '33', '34', '35',
    '40', '41', '42', '43', '44', '45',
    '50', '51', '52', '53', '54', '55'
  ];

  counters.forEach(function (counter) {
    circles[counter] = $('#' + counter).hasClass('red');
  });
  console.log('circles:', circles);

  function isEven(num) {
    return parseInt(num) % 2 === 0;
  }
  var count = 0;
  $('.container .circle').click(function() {

    var c00red = $('#00').hasClass('red');
    var c01red = $('#01').hasClass('red');
    var c02red = $('#02').hasClass('red');
    var c03red = $('#03').hasClass('red');
    var c04red = $('#04').hasClass('red');
    var c05red = $('#05').hasClass('red');

    var c10red = $('#10').hasClass('red');
    var c11red = $('#11').hasClass('red');
    var c12red = $('#12').hasClass('red');
    var c13red = $('#13').hasClass('red');
    var c14red = $('#14').hasClass('red');
    var c15red = $('#15').hasClass('red');

    var c20red = $('#20').hasClass('red');
    var c21red = $('#21').hasClass('red');
    var c22red = $('#22').hasClass('red');
    var c23red = $('#23').hasClass('red');
    var c24red = $('#24').hasClass('red');
    var c25red = $('#25').hasClass('red');

    var c30red = $('#30').hasClass('red');
    var c31red = $('#31').hasClass('red');
    var c32red = $('#32').hasClass('red');
    var c33red = $('#33').hasClass('red');
    var c34red = $('#34').hasClass('red');
    var c35red = $('#35').hasClass('red');

    var c40red = $('#40').hasClass('red');
    var c41red = $('#41').hasClass('red');
    var c42red = $('#42').hasClass('red');
    var c43red = $('#43').hasClass('red');
    var c44red = $('#44').hasClass('red');
    var c45red = $('#45').hasClass('red');

    var c50red = $('#50').hasClass('red');
    var c51red = $('#51').hasClass('red');
    var c52red = $('#52').hasClass('red');
    var c53red = $('#53').hasClass('red');
    var c54red = $('#54').hasClass('red');
    var c55red = $('#55').hasClass('red');

    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
    $(this).addClass(circleClass);

    // $(this).toggleClass('red', count % 1 === 0);
    // $(this).toggleClass('blue', count % 2 === 0);

    $(function() {
      if (circles['00'] && c01red && c02red && c03red) {
      // if (c00red && c01red && c02red && c03red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c01red && c02red && c03red && c04red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c02red && c03red && c04red && c05red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c10red && c11red && c12red && c13red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c11red && c12red && c13red && c14red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c12red && c13red && c14red && c15red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c20red && c21red && c22red && c23red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c21red && c22red && c23red && c24red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c22red && c23red && c24red && c25red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c30red && c31red && c32red && c33red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c31red && c32red && c33red && c34red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c32red && c33red && c34red && c35red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c40red && c41red && c42red && c43red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c41red && c42red && c43red && c44red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c42red && c43red && c44red && c45red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c50red && c51red && c52red && c53red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c51red && c52red && c53red && c54red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c52red && c53red && c54red && c55red) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (c00red && c10red && c20red && c30red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c10red && c20red && c30red && c40red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c20red && c30red && c40red && c50red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c01red && c11red && c21red && c31red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c11red && c21red && c31red && c41red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c21red && c31red && c41red && c51red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c02red && c12red && c22red && c32red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c12red && c22red && c32red && c42red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c22red && c32red && c42red && c52red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c03red && c13red && c23red && c33red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c13red && c23red && c33red && c43red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c23red && c33red && c43red && c53red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c04red && c14red && c24red && c34red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c14red && c24red && c34red && c44red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c24red && c34red && c44red && c54red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c05red && c15red && c25red && c35red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c15red && c25red && c35red && c45red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c25red && c35red && c45red && c55red) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (c25red && c34red && c43red && c52red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c15red && c24red && c33red && c42red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c24red && c33red && c42red && c51red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c05red && c14red && c23red && c32red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c14red && c23red && c32red && c41red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c23red && c32red && c41red && c50red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c04red && c13red && c22red && c31red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c13red && c22red && c31red && c40red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c03red && c12red && c21red && c30red) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (c35red && c24red && c13red && c02red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c45red && c34red && c23red && c12red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c34red && c23red && c12red && c01red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c55red && c44red && c33red && c22red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c44red && c33red && c22red && c11red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c33red && c22red && c11red && c00red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c54red && c43red && c32red && c21red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (c43red && c32red && c21red && c10red) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (c53red && c42red && c31red && c20red) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (c00red && c01red && c02red && c03red) {
        alert('red Winner');
      }
    });
    $(function() {
      if (c01red && c02red && c03red && c04red) {
        alert('red Winner');
      }
    });
    $(function() {
      if (c02red && c03red && c04red && c05red) {
        alert('red Winner');
      }
    });

  });

});
