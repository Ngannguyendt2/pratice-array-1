function clearNumber() {
    let limitArray = Number(prompt("Import limit Array"));
    let number, index = 0, count = 0, value, flag = true;
    let arrayNumber = [];
    for (let i = 0; i < limitArray; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }
    alert(arrayNumber);
    value = Number(prompt("Import number need find"));
    for (let j = 0; j < arrayNumber.length; j++) {
        if (arrayNumber[j] == value) {
            flag = false;
            index = j;
            break;
        }
        count++;
    }
    if (count == arrayNumber.length) {
        alert(value + " is not in array");
        count = 0;
    }
    if (flag == false) {
        arrayNumber.splice(index, 1);
        alert('Array after clear number '+arrayNumber);
    }
}
