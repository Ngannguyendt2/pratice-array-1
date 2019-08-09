function sortReduction() {
    let limitArray = Number(prompt("Import limit Array"));
    let number, j;
    let arrayNumber = [];
    for (let i = 0; i < limitArray; i++) {
        number = Number(prompt("Import number"));
        arrayNumber.push(number);
    }
 let temp;
    for(let i=0;i<arrayNumber.length-1;i++)
    {
        for(let j=i+1;j<arrayNumber.length;j++)
        {
            temp=arrayNumber[i];
            arrayNumber[i]=arrayNumber[j];
            arrayNumber[j]=temp;
        }
    }
    alert(arrayNumber);


}