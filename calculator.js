let txtanswer = document.getElementById("Answer")
let width = document.getElementsByClassName("width")
let trimtxtanswer = txtanswer.value.trim();
txtanswer.value=trimtxtanswer; 
function EnterOperator(){
    
     if(isNaN(parseInt(value))&&trimtxtanswer==""){
        txtanswer.value=""
     }else {
      txtanswer+=value
     }     
}