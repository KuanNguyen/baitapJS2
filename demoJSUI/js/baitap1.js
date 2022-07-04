
function tinhLuong(){
var salaryPD = 100000;
var workDays = document.getElementById("workDays").value;


var salary = 0;


salary = Number(salaryPD) * Number(workDays);


document.getElementById("luongNV").innerHTML = salary;
if(workDays <= 0){
    document.getElementById("luongNV").innerHTML = "số ngày lương không hợp lệ";
}
}
document.getElementById("btnLuong").onclick = tinhLuong;
