export class CalculatorServices{
   firstNumber : number  | null = 1;
    secondNumber : number | null = 1;
    result: number = 0;
    //  firstNumber = document.getElementById("firstNumber").value;
    // document.getElementById("demo").innerHTML = x;
add(firstNumber : number, secondNumber :number ){
    if (firstNumber != null && secondNumber != null){
        this.result = firstNumber + secondNumber;
    }
}
subtract(firstNumber : number, secondNumber :number ){
    if (firstNumber != null && secondNumber != null){
        this.result = firstNumber - secondNumber;
    }
}
multiply(firstNumber : number, secondNumber :number ){
    if (firstNumber != null && secondNumber != null){
    this.result  = firstNumber * secondNumber;
    }
}
divide(firstNumber : number  , secondNumber :number){
    if (secondNumber == 0 ){
        this.result = +"Not Valid";
    }
    else if(firstNumber != null && secondNumber != null){
        this.result = firstNumber / secondNumber;
    }
    else {
        console.log(`first number ${firstNumber} and second number ${secondNumber}`)
    }
}
}