function sort() {
    let arrayNumber=[];
    let number;
    let temp;

    for (let i = 0; i < 5; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }
    for(let i=0;i<arrayNumber.length/2;i++)
    {
        temp=arrayNumber[i];
        arrayNumber[i]=arrayNumber[arrayNumber.length-1-i];
        arrayNumber[arrayNumber.length-1-i]=temp;
    }
    document.write(arrayNumber);
}