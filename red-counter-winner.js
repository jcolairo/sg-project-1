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


  console.log('circles:', circles);

  function isEven(num) {
    return parseInt(num) % 2 === 0;
  }
  var count = 0;
  $('.container .circle').click(function() {

    counters.forEach(function (counter) {
      circles[counter] = $('#' + counter).hasClass('red');
    });

    count++;
    var circleClass = (isEven(count)) ? 'blue' : 'red';
    $(this).addClass(circleClass);

    // $(this).toggleClass('red', count % 1 === 0);
    // $(this).toggleClass('blue', count % 2 === 0);

    $(function() {
      if (circles['00'] && circles['01'] && circles['02'] && circles['03']) {
      // if (c00red && c01red && c02red && c03red) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['01'] && circles['02'] && circles['03'] && circles['04']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['02'] && circles['03'] && circles['04'] && circles['05']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['10'] && circles['11'] && circles['12'] && circles['13']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['11'] && circles['12'] && circles['13'] && circles['14']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['12'] && circles['13'] && circles['14'] && circles['15']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['20'] && circles['21'] && circles['22'] && circles['23']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['21'] && circles['22'] && circles['23'] && circles['24']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['22'] && circles['23'] && circles['24'] && circles['25']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['30'] && circles['31'] && circles['32'] && circles['33']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['31'] && circles['32'] && circles['33'] && circles['34']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['32'] && circles['33'] && circles['34'] && circles['35']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['40'] && circles['41'] && circles['42'] && circles['43']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['41'] && circles['42'] && circles['43'] && circles['44']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['42'] && circles['43'] && circles['44'] && circles['45']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['50'] && circles['51'] && circles['52'] && circles['53']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['51'] && circles['52'] && circles['53'] && circles['54']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['52'] && circles['53'] && circles['54'] && circles['55']) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (circles['00'] && circles['10'] && circles['20'] && circles['30']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['10'] && circles['20'] && circles['30'] && circles['40']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['20'] && circles['30'] && circles['40'] && circles['50']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['01'] && circles['11'] && circles['21'] && circles['31']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['11'] && circles['21'] && circles['31'] && circles['41']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['21'] && circles['31'] && circles['41'] && circles['51']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['02'] && circles['12'] && circles['22'] && circles['32']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['12'] && circles['22'] && circles['32'] && circles['42']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['22'] && circles['32'] && circles['42'] && circles['52']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['03'] && circles['13'] && circles['23'] && circles['33']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['13'] && circles['23'] && circles['33'] && circles['43']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['23'] && circles['33'] && circles['43'] && circles['53']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['04'] && circles['14'] && circles['24'] && circles['34']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['14'] && circles['24'] && circles['34'] && circles['44']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['24'] && circles['34'] && circles['44'] && circles['54']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['05'] && circles['15'] && circles['25'] && circles['35']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['15'] && circles['25'] && circles['35'] && circles['45']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['25'] && circles['35'] && circles['45'] && circles['55']) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (circles['25'] && circles['34'] && circles['43'] && circles['52']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['15'] && circles['24'] && circles['33'] && circles['42']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['24'] && circles['33'] && circles['42'] && circles['51']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['05'] && circles['14'] && circles['23'] && circles['32']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['14'] && circles['23'] && circles['32'] && circles['41']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['23'] && circles['32'] && circles['41'] && circles['50']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['04'] && circles['13'] && circles['22'] && circles['31']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['13'] && circles['22'] && circles['31'] && circles['40']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['03'] && circles['12'] && circles['21'] && circles['30']) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (circles['35'] && circles['24'] && circles['13'] && circles['02']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['45'] && circles['34'] && circles['23'] && circles['12']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['34'] && circles['23'] && circles['12'] && circles['01']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['55'] && circles['44'] && circles['33'] && circles['22']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['44'] && circles['33'] && circles['22'] && circles['11']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['33'] && circles['22'] && circles['11'] && circles['00']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['54'] && circles['43'] && circles['32'] && circles['21']) {
        alert('Red Winner');
      }
    });
    $(function() {
      if (circles['43'] && circles['32'] && circles['21'] && circles['10']) {
        alert('Red Winner');
      }
    });

    $(function() {
      if (circles['53'] && circles['42'] && circles['31'] && circles['20']) {
        alert('Red Winner');
      }
    });


    $(function() {
      if (circles['00'] && circles['01'] && circles['02'] && circles['03']) {
        alert('red Winner');
      }
    });
    $(function() {
      if (circles['01'] && circles['02'] && circles['03'] && circles['04']) {
        alert('red Winner');
      }
    });
    $(function() {
      if (circles['02'] && circles['03'] && circles['04'] && circles['05']) {
        alert('red Winner');
      }
    });

  });

});
