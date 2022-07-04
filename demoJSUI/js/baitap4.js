

var chuVi = 0;
var dienTich = 0;



function tinhChuVi() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById("ChuVi").innerHTML = chuVi;
}
document.getElementById("btnChuVi").onclick = tinhChuVi;


function tinhDienTich() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    dienTich = chieuDai * chieuRong;
    document.getElementById("DienTich").innerHTML = dienTich;
}
document.getElementById("btnDienTich").onclick = tinhDienTich;

