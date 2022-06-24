let firstNum = parseInt(prompt("Enter first Number:"));
let operator = prompt("Choose operator (+,-,*,/):");
let secondNum = parseInt(prompt("Enter second Number:"));

if (operator == '+')
{
    alert(firstNum + secondNum);
}
else if(operator == '*')
{
    alert(firstNum * secondNum);
}
else if(operator == "-")
{
    alert(firstNum - secondNum);
}
else
{
    alert(firstNum / secondNum);
}


