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


  var count = 0;
  $('.circle').click(function() {
    count++;
    $(this).toggleClass('red', count % 1 === 0);
    $(this).toggleClass('blue', count % 2 === 0);
  });

  // console.log(circle55);

  //$('.circle').hasId('red');
//  $( 'section:has(div)'.addClass('hahahahahahahahaah') );

  // for (var i = 0, i < col1.length, i++);
  //   if(col1[i] === 0)

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
});
// });

// var newGame = [ col ] [ col ]
