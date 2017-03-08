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

});

var count = 0;
$('.container').children().children().children().click(function() {

  var c00blue = $('#00').hasClass('blue', 'red');
  var c01blue = $('#01').hasClass('blue', 'red');
  var c02blue = $('#02').hasClass('blue', 'red');
  var c03blue = $('#03').hasClass('blue', 'red');
  var c04blue = $('#04').hasClass('blue', 'red');
  var c05blue = $('#05').hasClass('blue', 'red');

  var c10blue = $('#10').hasClass('blue', 'red');
  var c11blue = $('#11').hasClass('blue', 'red');
  var c12blue = $('#12').hasClass('blue', 'red');
  var c13blue = $('#13').hasClass('blue', 'red');
  var c14blue = $('#14').hasClass('blue', 'red');
  var c15blue = $('#15').hasClass('blue', 'red');

  var c20blue = $('#20').hasClass('blue', 'red');
  var c21blue = $('#21').hasClass('blue', 'red');
  var c22blue = $('#22').hasClass('blue', 'red');
  var c23blue = $('#23').hasClass('blue', 'red');
  var c24blue = $('#24').hasClass('blue', 'red');
  var c25blue = $('#25').hasClass('blue', 'red');

  var c30blue = $('#30').hasClass('blue', 'red');
  var c31blue = $('#31').hasClass('blue', 'red');
  var c32blue = $('#32').hasClass('blue', 'red');
  var c33blue = $('#33').hasClass('blue', 'red');
  var c34blue = $('#34').hasClass('blue', 'red');
  var c35blue = $('#35').hasClass('blue', 'red');

  var c40blue = $('#40').hasClass('blue', 'red');
  var c41blue = $('#41').hasClass('blue', 'red');
  var c42blue = $('#42').hasClass('blue', 'red');
  var c43blue = $('#43').hasClass('blue', 'red');
  var c44blue = $('#44').hasClass('blue', 'red');
  var c45blue = $('#45').hasClass('blue', 'red');

  var c50blue = $('#50').hasClass('blue', 'red');
  var c51blue = $('#51').hasClass('blue', 'red');
  var c52blue = $('#52').hasClass('blue', 'red');
  var c53blue = $('#53').hasClass('blue', 'red');
  var c54blue = $('#54').hasClass('blue', 'red');
  var c55blue = $('#55').hasClass('blue', 'red');

  count++;
  $(this).toggleClass('red', count % 1 === 0);
  $(this).toggleClass('blue', count % 2 === 0);

  $(function() {
    if (c00blue && c01blue && c02blue && c03blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c01blue && c02blue && c03blue && c04blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c02blue && c03blue && c04blue && c05blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c10blue && c11blue && c12blue && c13blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c11blue && c12blue && c13blue && c14blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c12blue && c13blue && c14blue && c15blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c20blue && c21blue && c22blue && c23blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c21blue && c22blue && c23blue && c24blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c22blue && c23blue && c24blue && c25blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c30blue && c31blue && c32blue && c33blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c31blue && c32blue && c33blue && c34blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c32blue && c33blue && c34blue && c35blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c40blue && c41blue && c42blue && c43blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c41blue && c42blue && c43blue && c44blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c42blue && c43blue && c44blue && c45blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c50blue && c51blue && c52blue && c53blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c51blue && c52blue && c53blue && c54blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c52blue && c53blue && c54blue && c55blue) {
      alert('Blue Winner');
    }
  });


  $(function() {
    if (c00blue && c10blue && c20blue && c30blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c10blue && c20blue && c30blue && c40blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c20blue && c30blue && c40blue && c50blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c01blue && c11blue && c21blue && c31blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c11blue && c21blue && c31blue && c41blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c21blue && c31blue && c41blue && c51blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c02blue && c12blue && c22blue && c32blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c12blue && c22blue && c32blue && c42blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c22blue && c32blue && c42blue && c52blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c03blue && c13blue && c23blue && c33blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c13blue && c23blue && c33blue && c43blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c23blue && c33blue && c43blue && c53blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c04blue && c14blue && c24blue && c34blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c14blue && c24blue && c34blue && c44blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c24blue && c34blue && c44blue && c54blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c05blue && c15blue && c25blue && c35blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c15blue && c25blue && c35blue && c45blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c25blue && c35blue && c45blue && c55blue) {
      alert('Blue Winner');
    }
  });


  $(function() {
    if (c25blue && c34blue && c43blue && c52blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c15blue && c24blue && c33blue && c42blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c24blue && c33blue && c42blue && c51blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c05blue && c14blue && c23blue && c32blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c14blue && c23blue && c32blue && c41blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c23blue && c32blue && c41blue && c50blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c04blue && c13blue && c22blue && c31blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c13blue && c22blue && c31blue && c40blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c03blue && c12blue && c21blue && c30blue) {
      alert('Blue Winner');
    }
  });


  $(function() {
    if (c35blue && c24blue && c13blue && c02blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c45blue && c34blue && c23blue && c12blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c34blue && c23blue && c12blue && c01blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c55blue && c44blue && c33blue && c22blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c44blue && c33blue && c22blue && c11blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c33blue && c22blue && c11blue && c00blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c54blue && c43blue && c32blue && c21blue) {
      alert('Blue Winner');
    }
  });
  $(function() {
    if (c43blue && c32blue && c21blue && c10blue) {
      alert('Blue Winner');
    }
  });

  $(function() {
    if (c53blue && c42blue && c31blue && c20blue) {
      alert('Blue Winner');
    }
  });

});


console.log($('.circle').click(function () {
  console.log($(this).attr('id'),
    console.log($(this).attr('class')));
}));


  // var currentID = $(this).attr('id');
  // var firstCoOrdinate = currentID[0];
  // var secondCoOrdinate = currentID[1];
  //
  // arrayObject[firstCoOrdinate][secondCoOrdinate] = 'red';
  // arrayObject[firstCoOrdinate][secondCoOrdinate] = 'blue';




  // var currentID = $(this).attr('id'); //34
  // var firstCoOr = currentID[0]; // 3
  // var secondCoOr = currentID[1]; // 4
  //
  // arrayObject[firstCoOr][secondCoOr] = 'red';
    // $('.circle').dblclick(function() {
    //   $(this).addClass('blue');
    // });

// });

// var newGame = [ col ] [ col ]
