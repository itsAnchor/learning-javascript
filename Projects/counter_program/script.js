
let number;

document.getElementById("decrease").onclick = function(){
  
  number = document.getElementById("number").innerText;
  number = Number(number);
  
  document.getElementById("number").innerText = number - 1;
  
  
};

document.getElementById("increase").onclick = function(){
  
  
  number = document.getElementById("number").innerText;
  number = Number(number);
  
  document.getElementById("number").innerText = number + 1;
  
};

document.getElementById("reset").onclick = function(){
  
  document.getElementById("number").innerText = 0;
};



