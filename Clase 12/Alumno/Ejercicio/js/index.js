$(document).ready(function () {
  $('.square').click(handleClick)
});
var nextSymbol = 'cross'

function handleClick(e) {
  var symbol = nextSymbol
  var square = $(e.target)

  if (!square.hasClass('circle') && !square.hasClass('cross')) {
    if (symbol === 'circle') {
      nextSymbol = 'cross'
    } else {
      nextSymbol = 'circle'
    }
    square.addClass(symbol)
  }
}


// $(document.readyState(function () {});