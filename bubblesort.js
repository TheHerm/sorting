/* eslint-env node */

function bubbleSort (array) {

  for (var i = 0; i < array.length; i++) {

    for (var j = 0; j < array.length; j++) {
      var nextVar = array[j + 1];
      var curVar = array[j];

      if(nextVar < curVar && nextVar !== undefined) {
        array.splice(j, 2, nextVar, curVar);
      }
    }
  }
  return array;
}

function split (array) {

    return [array.slice(0, Math.floor(array.length / 2)), array.slice(Math.floor(array.length / 2))];

}

function merge (array1, array2) {
  var finalArray = [];
  var sumArray = array1.length + array2.length;
  
  for (var i = 0; i < sumArray; i++) {
    if(array1[0] > array2[0] || !array1[0]) {
      finalArray.push(array2.shift());
    } else {
      finalArray.push(array1.shift());
    }
  }

  return finalArray;
}

function mergeSort (array) {

  if(array.length === 1) {
    return array;
  }

  var [firstArr, secondArr] = split(array);

  return merge(mergeSort(firstArr), mergeSort(secondArr));

}
