let inputscreen=document.getElementById("input");
function btnclick(num){
    inputscreen.value+=num;
}
function cancle(){
  inputscreen.value="";
}
function deleteinput(){
  inputscreen.value = inputscreen.value.slice(0, -1);
}
function Calculate() {
  try {
      var expression = inputscreen.value;
      expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
      var result = eval(expression);
      inputscreen.value = result;
  } catch (e) {
      inputscreen.value = "Error";
  }
}

