function findNumber() {
    let limitArray = Number(prompt("Import limit Array"));
    let number, count = 0, value;
    let arrayNumber = [];
    for (let i = 0; i < limitArray; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }
    value = Number(prompt("Import number need find"));
    for (let j = 0; j < arrayNumber.length; j++) {
        if (arrayNumber[j] == value) {
            alert(value + " is in array");
            break;
        }
        count++;
    }
    if (count == arrayNumber.length) {
        alert(value + " is not in array");
        count = 0;
    }
}