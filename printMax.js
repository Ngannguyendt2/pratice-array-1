function printMax() {
    let arrayNumber = [];
    let number;

    for (let i = 0; i < 10; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }
    console.log(arrayNumber);
    let max = arrayNumber[0];
    let index = 0;
    for (let i = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > max) {
            max = arrayNumber[i];
            index = i;
        }
    }
  
    alert('Max is '+arrayNumber[index]+" at location "+ index);
}


