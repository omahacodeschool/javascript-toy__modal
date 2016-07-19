window.addEventListener("load", function(){

  var button = document.getElementById("greeting");

  button.addEventListener("click", function(){

  var modal = document.getElementById("modal__box");

  modal.style.visibility = "visible";
  });
  
});

window.addEventListener("load", function(){

  var close = document.getElementById("close");

  close.addEventListener("click", function(){

  var modal = document.getElementById("modal__box");

  modal.style.visibility = "hidden";
  });
  
});