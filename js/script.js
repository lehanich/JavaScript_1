let result ;

main()

function main(){
    lesson02()
}

function lesson01(){
    var Tc = 20
    var Tf = (9 / 5) * Tc + 32
    alert (Tf)

    var name = "Василий"
    var admin
    admin = name
    alert(admin)

    var A = 20 
    var B = 30
    console.log("A:" + A + " B:" + B);
    B = (function(){ A=B; return arguments[0]; })(A);
    console.log("A:" + A + " B:" + B);
    [B, A] = [A,B]
    console.log("A:" + A + " B:" + B);
    B = A-B; 
    A = A-B;
    B = A+B;
    console.log("A:" + A + " B:" + B);
    console.log( 1000 + "108");
}

function lesson02(){
    //3
    let a = +prompt("Введите А")
    let b = +prompt("Введите B")
    if(a >= 0 && b >= 0){
        console.log(a-b);
    }else if (a<0 && b<0){
        console.log(a*b);
    }else{
        console.log(a+b); 
    }

    //4
    a = +prompt("Введите А по заданию 4")
    switchFunction(a)

    //6
    let ch1 = +prompt("Введите 1 число")
    let ch2 = +prompt("Введите 2 число")
    let op = +prompt("Введите операцию: 1 - '+', 2 - '-', 3 - '/', 4 - '*' ")
    console.log(mathOps(ch1, ch2, op))

    //7
    let сh11 = +prompt("Введите число для возведения в степень")
    let сh22 = +prompt("Введите степень")
    console.log(power(сh11, сh22))
}


function switchFunction(a){
    switch(a) {
        case 1:  console.log(1);
        case 2:  console.log(2);
        case 3:  console.log(3);
        case 4:  console.log(4);
        case 5:  console.log(5);
        case 6:  console.log(6);
        case 7:  console.log(7);
        case 8:  console.log(8);
        case 9:  console.log(9);
        case 10:  console.log(10);
        case 11:  console.log(11);
        case 12:  console.log(12);
        case 13:  console.log(13);
        case 14:  console.log(14);
        case 15:  console.log(15);
      }
}

function funcSum(arg1, arg2){
    return arg1 + arg2
}

function funcSubtraction(arg1, arg2){
    return arg1 - arg2
}

function funcDivision(arg1, arg2){
    return arg1 / arg2
}

function funcMultiplication(arg1, arg2){
    return arg1 * arg2
}

function mathOps(arg1, arg2, op){
    switch(op) {
        case 1:  return funcSum(arg1, arg2)
        break

        case 2:  return funcSubtraction(arg1, arg2)
        break

        case 3:  return funcDivision(arg1, arg2)
        break

        case 4:  return funcMultiplication(arg1, arg2)
        break

        default:  return "Введите операцию: 1 - '+', 2 - '-', 3 - '/', 4 - '*'"

    }
}

function power(val, pow){
    return pow == 0 || !pow ? 1 : pow > 1 ? val * power(val, pow - 1) : val
    // if(pow > 0){
    //     result == 0 || result == null ? result = val : result *= val
    //     power(val, pow-1)
    // }else{
    //     result = 1
    // }
    // return "result: " + result
}