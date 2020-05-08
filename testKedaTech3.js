var numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var sort = numbers.sort(function (a, b) {
    return a - b;
});
var smallest = sort[0],
    largest = sort[sort.length - 1];

console.log(sort);
console.log('Smallest: ' + smallest);
console.log('Largest: ' + largest);