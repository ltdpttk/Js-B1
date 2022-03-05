document.getElementById("calculation").onclick = function(){
    var day = document.getElementById("day").value*1;
    var salaryPerDay = 100000 *day;
    document.getElementById("notify1").innerHTML = "Total: " + salaryPerDay;
};

document.getElementById("average").onclick = function(){
    var n1 = document.getElementById("Number1").value*1;
    var n2 = document.getElementById("Number2").value*1;
    var n3 = document.getElementById("Number3").value*1;
    var n4 = document.getElementById("Number4").value*1;
    var n5 = document.getElementById("Number5").value*1;
    var average = (n1+n2+n3+n4+n5) / 5;
    document.getElementById("notify2").innerHTML = "Average is " + average;
};

document.getElementById("exchange").onclick = function(){
    var USD = document.getElementById("USD").value*1;
    var exchange = 23500 * USD;
    document.getElementById("notify3").innerHTML = exchange + " VND"
} 

document.getElementById("P").onclick = function(){
    var length = document.getElementById("length").value*1;
    var width = document.getElementById("width").value*1;
    var p = (length+width)*2;
    document.getElementById("notify4_1").innerHTML = "Perimeter is " + p;
}

document.getElementById("A").onclick = function(){
    var length = document.getElementById("length").value*1;
    var width = document.getElementById("width").value*1;
    var a = length*width;
    document.getElementById("notify4_2").innerHTML = "Area is " + a;
}

document.getElementById("total").onclick = function(){
    var number = document.getElementById("number").value*1;
    var donvi = number %10;
    var chuc = parseInt (number / 10);
    document.getElementById("notify5").innerHTML = "Total is " + (donvi+chuc);
}
