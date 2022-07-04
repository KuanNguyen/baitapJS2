



function tinhTrungBinh(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;
var number3 = document.getElementById("number3").value;
var number4 = document.getElementById("number4").value;
var number5 = document.getElementById("number5").value;
var Anumber = 0;





Anumber = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5))/5;

document.getElementById("soTrungBinh").innerHTML = Anumber;
}
document.getElementById("btnSTB").onclick = tinhTrungBinh;
