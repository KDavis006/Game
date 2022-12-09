let rand1 = 0
let rand2 = 0
let rand3 = 0
let rand4 = 0

for(i=0;i<=99;i++){
 rand1 = Math.round(Math.random()*25)
 rand2 = Math.round(Math.random()*25)
 rand3 = Math.round(Math.random()*25)
 rand4 = Math.round(Math.random()*25)
 if(rand1 == rand2 || rand1 == rand3 || rand1 == rand4 || rand2 == rand3 || rand2 == rand4 || rand3 == rand4){
  continue
 } else {
  break
 }
}

for(let i = 1; i <= 4; i++){
    let kbbutton = Math.round(Math.random()*26);
    let z = document.getElementById(`button${kbbutton}`).innerText
    let x = `rand${i}`;
    document.getElementById(`character${x}`).innerText = z;
}

function onkeypress(character){
 for(let i = 1; i <= 25; i++){
 let x = document.getElementById(`character${i}`).innerText
 if(x == ""){
  
  document.getElementById(`character${i}`).innerText = character
  console.log('This is working fine!');
  return
 }
 }
}