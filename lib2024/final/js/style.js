function results() {
    var strText = document.getElementById('name').value; 
    var strText2 = document.getElementById('email').value; 
    var strText3 = document.getElementById('address').value; 
    var strText4 = document.getElementById('city').value; 
    var strText5 = document.getElementById('postalcode').value; 
    var strText6 = document.getElementById('province').value; 

    document.getElementById('p1').innerHTML = strText; 
    document.getElementById('p2').innerHTML = strText2; 
    document.getElementById('p3').innerHTML = strText3; 
    document.getElementById('p4').innerHTML = strText4;  
    document.getElementById('p5').innerHTML = strText5; 
    document.getElementById('p6').innerHTML = strText6; 

}