$(document).ready(function () {
  $(document).keydown(changeCounter);

});

var counter = 0;

function changeCounter(event) {
  var key = event.which
  console.log(key)
  //38 up, 40 down, 13 enter
  switch (key) {
    case 13: //enter
      counter = 0;
      break;
    case 38: //up
      counter++ //  es igual a counter +=1;
      break;
    case 40: //down
      counter-- //  es igual a counter -=1;
      break;

  }
  $('#counter').html(counter);
}