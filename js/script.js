
lesson01()

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
