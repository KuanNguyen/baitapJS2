function doiTien() {


    var USD = document.getElementById("USD").value;
    
  
    var VND = 23500;



   


    
    VND = Number(USD) * Number(VND);

  
document.getElementById("VND").innerHTML = VND;
}
document.getElementById("btnDoi").onclick = doiTien;
   
