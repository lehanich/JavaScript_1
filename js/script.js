let result ;
let variants2 = ["Камень", "Ножницы", "Бумага"]

main()

function main(){
    //lesson02()
    //lesson03()
    lesson04()
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

//Урок 3
function lesson03(){
    //1
    let easy = true //число простое
    let check = [2,3,4,5,6,7,8,9]

    for(i=0;i<=100;i++){
        j = 0
        while(easy && j < check.length){
            if(i % check[j] === 0 && i != check[j]){
                easy = false
            }
            j++
        }
        easy ? console.log("Простое число  " + i) : easy = true
    }

    //4
    for(i=0;i<=9;console.log(i++)){}

    //5
    let string = "";
    for(i=0;i<20;i++){
        string += "x"
        console.log(string)
    }

    game_1()

    recGame()
}

//Камень ножницы бумага через цикл While
function game_1(){
    let finish = false
    let variants = ["Камень", "Ножницы", "Бумага"]

    while(!finish){
        let robotVarian = randomize()
        let variant = +prompt("0-камень, 1-ножницы, 2-бумага, 3-выход")
        if(variants[variant] !== undefined && variant != null){
            findOut(robotVarian, variant, variants)
        }else{
            console.log("Exit")
            finish = true
        }
    }

}

//Сравниваем вводы
function findOut(robotVarian, variant, variants){
    //0 - камень
    //1 - ножницы
    //2 - бумага
    console.log(`Робот ${variants[robotVarian]}, Игрок ${variants[variant]}`)
    if(robotVarian == 0 && variant==0 || robotVarian == 1 && variant==1 || robotVarian == 2 && variant==2){
        console.log("Ничья")
    }else if(robotVarian == 0 && variant==1 || robotVarian == 1 && variant==2 || robotVarian == 2 && variant==0){
        console.log("Игрок проиграл!")
    }else if(robotVarian == 0 && variant==2 || robotVarian == 1 && variant==0 || robotVarian == 2 && variant==1){
        console.log("Игрок выиграл!")
    }
}

//Генерируется случайное число 0 1 2
function randomize(){
    return Math.floor (Math.random() * 3)
}

//Камень ножницы бумага через рекурсивную функцию
function recGame(){
    let robotVarian = randomize()
    let variant = +prompt("0-камень, 1-ножницы, 2-бумага, 3-выход")
        if(variants2[variant] !== undefined && variant != null){
            findOut(robotVarian, variant, variants2)
            recGame()
        }
    console.log("Exit")
    return true
}

//Lesson04
function lesson04(){
    let chislo = +prompt("Введите число от 0 до 999")
    console.log(numberToObject(chislo))
}

function numberToObject(chislo){
    console.log(`Проверка числа ${chislo}`)
    if(chislo >= 0 && chislo < 1000 ){
        return {
            "единицы": chislo % 10,
            "десятки": Math.floor( (chislo % 100) / 10),
            "сотни": Math.floor(chislo / 100),
        }
    }else{
        console.log("Неправильное число")
        return {}
    }
}

        //Пример конструктора
        // let people = []

        // function createHuman (namePar) { // КОНСТРУКТОР
        //     return {
        //         name: namePar,
        //         goWork (hrs = 8) {
        //             console.log (`${this.name} goes work for ${hrs} hours`)
        //         }
        //     }
        // }