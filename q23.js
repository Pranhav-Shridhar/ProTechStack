//Given an array of integers, find the largest product yielded from three of the integers

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
console.log(computeProduct(unsortedArray)); // 21000

function sortIntegers(a,b){
    //console.log(b-a);
    return b-a;

}
//sortIntegers();

// function computeProduct(unsorted){
//     var sortedArray = unsorted.sort(sortIntegers),
//     product1 = 1,
//     product2 = 1,
//     array_n_element = sortedArray.length - 1;

//     for (var x = array_n_element; x > array_n_element - 3; x--) {
//         product1 = product1 * sortedArray[x];
//     }

//     product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

//     if (product1 > product2) return product1;

//    return product2;

// }

function computeProduct(unsorted){
    var sortedArray = unsorted.sort(sortIntegers);
    //console.log(sortedArray);

    return sortedArray[0] * sortedArray[1] * sortedArray[2];
    
}

