function count() {
    let limitArray=Number(prompt("Import limit Array"));
    let number,count=0;
    let arrayNumber=[];
    for(let i=0;i<limitArray;i++)
    {
        number=Number(prompt("Import number"));
        arrayNumber.push(number);
    }
    for(let j=0;j<arrayNumber.length;j++)
    {
        if(arrayNumber[j]<0)
        {
           count++;
        }
    }
    alert("Co "+count+" so am trong mang");
}