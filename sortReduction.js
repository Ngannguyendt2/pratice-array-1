function sortReduction() {
    let limitArray = Number(prompt("Import limit Array"));
    let number, j;
    let arrayNumber = [];
    for (let i = 0; i < limitArray; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }

    arrayNumber.sort(function (a, b) {
        return b - a
    });
    alert(arrayNumber);

}