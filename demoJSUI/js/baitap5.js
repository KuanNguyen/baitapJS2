



function TongHaiKiSo(){
var number = document.getElementById("number").value;
var soHangChuc = 0;
var soHangDonVi = 0;
var tong = 0;




soHangChuc = number/10;



soHangDonVi = number%10;

 
tong = parseInt(Number(soHangChuc)) + Number(soHangDonVi);


document.getElementById("tong").innerHTML = tong;
if(number < 10){
    document.getElementById("tong").innerHTML = "số không hợp lệ";
}
}

document.getElementById("btnTong").onclick = TongHaiKiSo;
   
