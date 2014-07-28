
function unsplat(fun) {
  return function() {
    return fun.call(null, (arguments));
  };
}

var joinElements = unsplat(function(array) { return array.join(' ') });

joinElements(1, 2);
//=> "1 2"

