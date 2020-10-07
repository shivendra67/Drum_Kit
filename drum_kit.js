// var li=document.querySelectorAll("button");
// li[0].addEventListener("click",function(){
//   alert("i got clicked");
// })
// li[1].addEventListener("click",function(){
//   alert("i got clicked");
// })
// li[2].addEventListener("click",function(){
//   alert("i got clicked");
// })
// li[3].addEventListener("click",function(){
//   alert("i got clicked");
// })
// li[4].addEventListener("click",function(){
//   alert("i got clicked");
// })
// li[5].addEventListener("click",function(){
//   alert("i got clicked");
// })
// li[6].addEventListener("click",function(){
//   alert("i got clicked");
// })
// function handleclick()
// {
//   alert("i got clicked");
// }
document.querySelectorAll(".drum")[0].addEventListener("click",function(){
  var aud=new Audio("sounds/snare.mp3");
  aud.play();
})
document.querySelectorAll(".drum")[1].addEventListener("click",function(){
  var aud=new Audio("sounds/kick-bass.mp3");
  aud.play();
})
document.querySelectorAll(".drum")[2].addEventListener("click",function(){
  var aud=new Audio("sounds/tom-1.mp3");
  aud.play();
})
document.querySelectorAll(".drum")[3].addEventListener("click",function(){
  var aud=new Audio("sounds/tom-2.mp3");
  aud.play();
})
document.querySelectorAll(".drum")[4].addEventListener("click",function(){
  var aud=new Audio("sounds/tom-3.mp3");
  aud.play();
})
document.querySelectorAll(".drum")[5].addEventListener("click",function(){
  var aud=new Audio("sounds/tom-4.mp3");
  aud.play();
})
document.querySelectorAll(".drum")[6].addEventListener("click",function(){
  var aud=new Audio("sounds/crash.mp3");
  aud.play();
})
