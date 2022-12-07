function fill(character){
 for(let i = 1; i <= 25; i++){
 let x = document.getElementById(`character${i}`).innerText
 if(x == ""){
  
  document.getElementById(`character${i}`).innerText = toUpperCase(character)
  console.log('This is working fine!');
  return
 }
 }
}