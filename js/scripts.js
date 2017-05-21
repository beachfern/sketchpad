$(document).ready(function() {
  for (var i = 0; i < 24; i ++) {
    $('#canvas').append('<div class="row"><div>');
    $('.row').height(29.16666666666666667);
  };
  $('button').on('click', function() {
    var gridSize = prompt("How many pixels should make up each side of the canvas? (1 to 100)","24");
    if (gridSize > 0 && gridSize <= 100) {
      $( "#canvas" ).empty();
      for (var i = 0; i < gridSize; i++) {
        $('#canvas').append('<div class="row"><div>');
      };
      for (var x = 0; x < gridSize; x++) {
        $('.row').append('<div class="column"><div>');
      };
      $('.row').height(700 / gridSize);
      $('.column').height(700 / gridSize);
      $('.column').width(700 / gridSize);
      if (!document.getElementById("rainbow")) {
        $('button').text('Change Pixel Size')
        $('#canvas').css('margin-top', '16px');
        $('#instructions').append('<button id ="rainbow">Rainbow</button>')
        $('#instructions').append('<button id ="black">Black</button>')
        $('#instructions').append('<button id ="eraser">Eraser</button>')
        $('#instructions').append('<button id ="squares">Squares</button>')
        $('#instructions').append('<button id ="circles">Circles</button>')
        $('#mainnav').append('<button id ="clear" class ="main">Clear</button>')

        };
    };
    $('.column').on('mouseenter', function() {
      $(this).css('background-color', 'black');
    });
    $('#rainbow').on('click', function() {
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      $('.column').on('mouseenter', function() {
        $(this).css('background-color', getRandomColor());
      });
    });
    $('#black').on('click', function() {
      $('.column').on('mouseenter', function() {
        $(this).css('background-color', 'black');
      });
    });
    $('#eraser').on('click', function() {
      $('.column').on('mouseenter', function() {
        $(this).css('background-color', '#F2F2F2');
      });
    });
    $('#clear').on('click', function() {
      $('.column').css('background-color', '#F2F2F2');
    });
    $('#squares').on('click', function() {
      $('.column').css('border-radius', '0');
    });
    $('#circles').on('click', function() {
      $('.column').css('border-radius', '50%');
    });
    $('button').on('mouseenter', function() {
      $(this).addClass('highlight');
    })
    $('button').on('mouseleave', function() {
      $(this).removeClass('highlight');
    })
  });
});
