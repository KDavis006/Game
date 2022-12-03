function fill(char){
 for(let i = 1; i <= 25; i++){
 let x = document.getElementById(  `${i}`).innerHTML
 if(x = ""){
  x = char;
  return
 }
 }
}