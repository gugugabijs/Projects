
var password=document.getElementById("password");
var passwordText=document.getElementById("passwordText");
var passwordError=document.getElementById("passwordError");
var labelText=document.getElementById("labelText");
var labelSuccess=document.getElementById("labelSuccess");
var labelError=document.getElementById("labelError");
var resetBtn=document.getElementById("resetBtn");
var createBtn=document.getElementById("createBtn");
var elements=document.querySelectorAll('input');
var table=document.getElementById("tableBody");

resetBtn.addEventListener("click", clearData);
function clearData(){
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = '';
      }
}
createBtn.addEventListener("click", validate);
 function validate(e){ 
  e.preventDefault();
  if (password.value.length<8){
 passwordText.style.display="none";
  passwordError.style.display="block"

  
}};
createBtn.addEventListener("click", checkIt);
 function checkIt (e){
  e.preventDefault();
   if (labelText.value.length<8){
    labelSuccess.style.display="none";
 labelError.style.display="block"
}};


createBtn.addEventListener("click", addData);
function addData(){
    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    var newCellPassword= document.createElement("td");
    var newCellLabel= document.createElement("td");
   newCell.innerHTML=username.value;
   newCellPassword.innerHTML=password.value;
   newCellLabel.innerHTML=labelText.value;

   
  newRow.append(newCell);
  newRow.append(newCellPassword);
  newRow.append(newCellLabel);
  table.append(newRow);
    

};

