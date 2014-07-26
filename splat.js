function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  };
}

var arr = [1,2];

var addArrayElements = splat(function (x, y) { return x + y; });

console.log(addArrayElements(arr));
console.log.apply(null, arr);
console.log(arr);

