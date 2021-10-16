


window.onload = function() {
  
  window.onload=function(){
  // $('H1').css({'text-color': 'red'}); 
  
  document.querySelector("#CrepeHeader").style.color = "red";
}

  
  document.querySelector("#crepeHeader").classList.add ("tp6");
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ul").classList.toggle("showMe");
  }
  
  document.querySelector("#crepeHeader").onclick = function(){
    this.classList.toggle("tp6");
  }
  
  document.querySelector("#footer").innerHTML += "<p>Serving Size 4 </p>";
} // end of window.onload


  
document.getElementById("serving size").innerHTML = "Serving Size Approx 12" ;

document.getElementById("calories").innerHTML = 1200 / 12




  
  