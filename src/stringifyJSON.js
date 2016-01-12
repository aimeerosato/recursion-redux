// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //handle string
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //take care of arrays using recursion
  if(Array.isArray(obj)){
    //create
    var stringifiedArray = '[';

    //loop through array
    for(var i = 0; i < obj.length; i++){
      //call stringifyJson on each index
      if (i === obj.length - 1) {
        stringifiedArray = stringifiedArray + stringifyJSON(obj[i]);
      } else {
        stringifiedArray = stringifiedArray + stringifyJSON(obj[i]) + ',';
      }
    }

    return stringifiedArray + ']';
  }

  //take care of objects
  //check for functions somewhere?
  if (obj && typeof obj === "object") {
    //loop through keys
    var newArr = [];
    for(var key in obj) {
      //use recursion to stringify each values
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      newArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + newArr + '}';
  }

  //turn primitives into string (numbers, strings, null, undefined, boolean)
  return '' + obj;
};
