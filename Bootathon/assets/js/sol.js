var opt1 = document.querySelector("#opt1_val1");
var ans1 = document.querySelector("#ans1");

var opt2 = document.querySelector("#opt2_val2");
var ans2 = document.querySelector("#ans2");

var opt3 = document.querySelector("#opt3_val2");
var ans3 = document.querySelector("#ans3");

var opt4 = document.querySelector("#opt4_val1");
var ans4 = document.querySelector("#ans4");

var opt5 = document.querySelector("#opt5_val4");
var ans5 = document.querySelector("#ans5");

var out = "Correct Answer!!!";

opt1.addEventListener("click",function(){
  opt1.checked=true;
  ans1.textContent = out;
  ans1.style.color = "green";
});

opt2.addEventListener("click",function(){
  opt2.checked=true;
  ans2.textContent = out;
  ans2.style.color = "green";
});

opt3.addEventListener("click",function(){
  opt3.checked=true;
  ans3.textContent = out;
  ans3.style.color = "green";
});

opt4.addEventListener("click",function(){
  opt4.checked=true;
  ans4.textContent = out;
  ans4.style.color = "green";
});

opt5.addEventListener("click",function(){
  opt5.checked=true;
  ans5.textContent = out;
  ans5.style.color = "green";
})
