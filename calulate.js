
function add(){
    var number1 = parseFloat( document.getElementById('mynumber').value);
    var number2 = parseFloat(document.getElementById('mynumber2').value);
    var addition = number1 + number2;
    alert(addition);
}

function sub(){
    var number1 = parseFloat( document.getElementById('mynumber').value);
    var number2 = parseFloat(document.getElementById('mynumber2').value);
    var subtraction = number1 - number2;
    alert(subtraction)
}

function modul(){
    var number1 = parseFloat( document.getElementById('mynumber').value);
    var number2 = parseFloat(document.getElementById('mynumber2').value);
    var modulus = number1 % number2;
    alert(modulus)

}

function div(){
    var number1 = parseFloat( document.getElementById('mynumber').value);
    var number2 = parseFloat(document.getElementById('mynumber2').value);
    var division = number1 / number2;
    alert(division)

}

function mul(){
    var number1 = parseFloat( document.getElementById('mynumber').value);
    var number2 = parseFloat(document.getElementById('mynumber2').value);
    var multiplication = number1 * number2;
    alert(multiplication)

}