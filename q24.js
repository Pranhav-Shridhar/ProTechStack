// Find the intersection of two arrays
var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

console.log(intersection(firstArray, secondArray)); // [2, 1]

function intersection(firstArray, secondArray){
    var hashmap = {};
    var intersectionArray = [];

    firstArray.forEach(function(element){
        hashmap[element] = 1;
        //console.log(hashmap[element]);
        //console.log(Object.values(hashmap));
    });

    secondArray.forEach(function(element){
        if(hashmap[element] === 1){
            intersectionArray.push(element);
            console.log(intersectionArray);
            hashmap[element]++;
        }
    });
    return intersectionArray;

}