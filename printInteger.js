function printInterger() {

    let arrayNumber = [];
    let number;
    let count = 0;
    for (let i = 0; i < 10; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }
    for (let i = 0; i < 10; i++) {
        if (arrayNumber[i] >= 10) {
            count++;
        }
    }
    alert("Co " + count + " so lon hon hoac bang 10");
}