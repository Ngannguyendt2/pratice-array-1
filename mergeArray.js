function mergeArray() {
    let limitArray = Number(prompt("Import limit Array"));
    let number1, number2, j = 0;
    let arrayNumber1 = [], arrayNumber2 = [], arrayNumber3 = [];
    for (let i = 0; i < limitArray; i++) {
        number1 = Number(prompt("Import number in array 1"));
        arrayNumber1.push(number1);
    }
    while (j < limitArray) {
        number2 = Number(prompt("Import number in array 2"));
        arrayNumber2.push(number2);
        j++;
    }
    arrayNumber3 = arrayNumber1.concat(arrayNumber2);
    alert("Array after merge is " + arrayNumber3);
}