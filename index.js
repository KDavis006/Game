let array = []
let array2 = []
let array3 = []
let array4 = []

let word1 = ""
let word2 = ""
let word3 = ""
let word4 = ""
let word5 = ""
let word6 = ""
let word7 = ""
let word8 = ""
let word9 = ""
let word10 = ""

let arrayword = ""

let arrayword1 = ""
let arrayword2 = ""
let arrayword3 = ""
let arrayword4 = ""
let arrayword5 = ""
let arrayword6 = ""
let arrayword7 = ""
let arrayword8 = ""
let arrayword9 = ""
let arrayword10 = ""

let letter1 = 0
let letter2 = 0
let letter3 = 0
let letter4 = 0

 var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);

function fill(character){
 for(let i = 1; i <= 25; i++){
 let x = document.getElementById(`character${i}`).innerText
 if(x == ""){
  
  document.getElementById(`character${i}`).innerText = character
  return
 }
 }
}


function del(){
    for(let i = 25;i >= 1;i--){
        let y = document.getElementById(`character${i}`).innerText
        if(i == array4[0] || i == array4[1] || i == array4[2] || i == array4[3] || i == array4[4]){
            continue;
        }
        if(y == ""){
            continue
        } else {
            document.getElementById(`character${i}`).innerText = ""
            return
        }
    }
}




function makeid() {
    let result           = '';
    let characters       = ['a','e','i','o','s','h','r','t','n'];
    let tf = '';
    for ( let i = 0; i < 4; i++ ) {
        let n = Math.ceil((Math.random() + 0.001) * characters.length);
        switch(n){
            case 0:
                n = 1;
                break;
            case 10:
                n = 9;
                break;
        }
        do {
          n = Math.ceil((Math.random() + 0.001) * characters.length);
          result = characters[n];
          for(let i = 0; i <= array.length;i++){
            if(result == array[i]){
              tf = 'No'
              break
            }
            tf = 'Yes'
          }
        }
        while(tf == 'No')
        characters.splice(n, 1);
        console.log(characters);
        
        let v = Math.ceil((Math.random() + 0.001)*25);
        do {   
            v = Math.ceil((Math.random() + 0.001)*25);
        } 
        while (document.getElementById(`character${v}`).innerText != "");
        document.getElementById(`character${v}`).innerText = result
        array.push(result);
        array4.push(v);
    }
    let x = [["","","","",""],[],[],[],[]]
    console.log(array);
    console.log(array4)
    check()
    return result;
}



function check(){
  for(let i = 1; i <= 5; i++){
    let arraywrd1 = document.getElementById(`character${i}`).innerText
    arrayword1 = word1.concat("", arraywrd1);

  }
  array3.push(arrayword1);
  for(let i = 6; i <= 10; i++){
    let arraywrd2 = document.getElementById(`character${i}`).innerText
    arrayword2 = arrayword2.concat("", arraywrd2);

  }
  array3.push(arrayword2);
  for(let i = 11; i <= 15; i++){
    let arraywrd3 = document.getElementById(`character${i}`).innerText
    arrayword3 = arrayword3.concat("", arraywrd3);

  }
  array3.push(arrayword3);
  for(let i = 16; i <= 20; i++){
    let arraywrd4 = document.getElementById(`character${i}`).innerText
    arrayword4 = word4.concat("", arraywrd4);

  }
  array3.push(arrayword4);
  for(let i = 21; i <= 25; i++){
    let arraywrd5 = document.getElementById(`character${i}`).innerText
    arrayword5 = arrayword5.concat("", arraywrd5);

  }
  array3.push(arrayword5);
  for(let i = 1; i <= 21; i+=5){
    let arraywrd6 = document.getElementById(`character${i}`).innerText
    arrayword6 = arrayword6.concat("", arraywrd6);

  }
  array3.push(arrayword6);
  for(let i = 2; i <= 22; i+=5){
    let arraywrd7 = document.getElementById(`character${i}`).innerText
    arrayword7 = word7.concat("", arraywrd7);

  }
  array3.push(arrayword7);
  for(let i = 3; i <= 23; i+=5){
    let arraywrd8 = document.getElementById(`character${i}`).innerText
    arrayword8 = word8.concat("", arraywrd8);

  }
  array3.push(arrayword8);
  for(let i = 4; i <= 24; i+=5){
    let arraywrd9 = document.getElementById(`character${i}`).innerText
    arrayword9 = word9.concat("", arraywrd9);

  }
  array3.push(arrayword9);
  for(let i = 5; i <= 25; i+=5){
    let arraywrd10 = document.getElementById(`character${i}`).innerText
    arrayword10 = arrayword10.concat("", arraywrd10);

  }
  array3.push(arrayword10);
  console.log(array3);
  for(let i = 0;i < array3.length; i++){
    let array3word = array3[i]
  if(array3word.length >= 3){
    reset()
  }
}
}

function fullclear(){
  for(let i = 1; i <= 25; i++){
    document.getElementById(`character${i}`).innerText = ""
  }
}

document.addEventListener("keyup", (e) => {

  let pressedKey = String(e.key);
  if (pressedKey === "Backspace"){
    del()
    return;
  }

  if (pressedKey === "Enter") {
        submit()
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return;
    } else if(found == "F11" || found == "F12"){
      return;
    } else {
        for(let i = 1; i <= 25; i++){
          let x = document.getElementById(`character${i}`).innerText
          if(x == ""){
  
            document.getElementById(`character${i}`).innerText = pressedKey
            return
 }
 }
    }
})



function submit(){
    for(let i = 1; i <= 25; i++){
 let wrd = document.getElementById(`character${i}`).innerText
 if(wrd == ""){
    alert("Please fill out all boxes");
    return
 }
 }
  for(let i = 1; i <= 5; i++){
    let wrd1 = document.getElementById(`character${i}`).innerText
    word1 = word1.concat("", wrd1);

  }
  array2.push(word1);
  for(let i = 6; i <= 10; i++){
    let wrd2 = document.getElementById(`character${i}`).innerText
    word2 = word2.concat("", wrd2);

  }
  array2.push(word2);
  for(let i = 11; i <= 15; i++){
    let wrd3 = document.getElementById(`character${i}`).innerText
    word3 = word3.concat("", wrd3);

  }
  array2.push(word3);
  for(let i = 16; i <= 20; i++){
    let wrd4 = document.getElementById(`character${i}`).innerText
    word4 = word4.concat("", wrd4);

  }
  array2.push(word4);
  for(let i = 21; i <= 25; i++){
    let wrd5 = document.getElementById(`character${i}`).innerText
    word5 = word5.concat("", wrd5);

  }
  array2.push(word5);
  for(let i = 1; i <= 21; i+=5){
    let wrd6 = document.getElementById(`character${i}`).innerText
    word6 = word6.concat("", wrd6);

  }
  array2.push(word6);
  for(let i = 2; i <= 22; i+=5){
    let wrd7 = document.getElementById(`character${i}`).innerText
    word7 = word7.concat("", wrd7);

  }
  array2.push(word7);
  for(let i = 3; i <= 23; i+=5){
    let wrd8 = document.getElementById(`character${i}`).innerText
    word8 = word8.concat("", wrd8);

  }
  array2.push(word8);
  for(let i = 4; i <= 24; i+=5){
    let wrd9 = document.getElementById(`character${i}`).innerText
    word9 = word9.concat("", wrd9);

  }
  array2.push(word9);
  for(let i = 5; i <= 25; i+=5){
    let wrd10 = document.getElementById(`character${i}`).innerText
    word10 = word10.concat("", wrd10);

  }
  array2.push(word10);
  console.log(array2);

  for(let i = 0; i <=array2.length; i++){
    arrayword = array[i]
    arrayword = arrayword.toLowerCase
    for(let i = 0; i <=WORDS.length; i++){
      if(arrayword == WORDS[i]){
        continue
      } else {
        document.getElementById('lose').style.display='block'
        return
      }
    }
    document.getElementById('win').style.display='block'
  }
}

function reset(){
array2 = [];

word1 = ""
word2 = ""
word3 = ""
word4 = ""
word5 = ""
word6 = ""
word7 = ""
word8 = ""
word9 = ""
word10 = ""

arrayword = ""

arrayword1 = ""
arrayword2 = ""
arrayword3 = ""
arrayword4 = ""
arrayword5 = ""
arrayword6 = ""
arrayword7 = ""
arrayword8 = ""
arrayword9 = ""
arrayword10 = ""

array = []
array3 = []

fullclear()
makeid()
}



function solve1(){
  for(let i = 0; i < 999;i++){
    letter1 = Math.floor(Math.random() * 25);
    letter2 = Math.floor(Math.random() * 25);
    letter3 = Math.floor(Math.random() * 25);
    letter4 = Math.floor(Math.random() * 25);

    if (letter1 != letter2 && letter1 != letter3 && letter1 != letter4 &&
        letter2 != letter3 && letter2 != letter4 && letter3 != letter4) {
      break;
    }
  }
  if(letter1 == 1 || letter2 == 1 || letter3 == 1 || letter4 == 1){
    document.getElementById("character1").innerHTML == ""
  }

  if(letter1 == 2 || letter2 == 2 || letter3 == 2 || letter4 == 2){
    document.getElementById("character2").innerHTML == ""
  }

  if(letter1 == 3 || letter2 == 3 || letter3 == 3 || letter4 == 3){
    document.getElementById("character3").innerHTML == ""
  }

  if(letter1 == 4 || letter2 == 4 || letter3 == 4 || letter4 == 4){
    document.getElementById("character4").innerHTML == ""
  }

  if(letter1 == 5 || letter2 == 5 || letter3 == 5 || letter4 == 5){
    document.getElementById("character5").innerHTML == ""
  }

  if(letter1 == 6 || letter2 == 6 || letter3 == 6 || letter4 == 6){
    document.getElementById("character6").innerHTML == ""
  }

  if(letter1 == 7 || letter2 == 7 || letter3 == 7 || letter4 == 7){
    document.getElementById("character7").innerHTML == ""
  }

  if(letter1 == 8 || letter2 == 8 || letter3 == 8 || letter4 == 8){
    document.getElementById("character8").innerHTML == ""
  }

  if(letter1 == 9 || letter2 == 9 || letter3 == 9 || letter4 == 9){
    document.getElementById("character9").innerHTML == ""
  }

  if(letter1 == 10 || letter2 == 10 || letter3 == 10 || letter4 == 10){
    document.getElementById("character10").innerHTML == ""
  }

  if(letter1 == 11 || letter2 == 11 || letter3 == 11 || letter4 == 11){
    document.getElementById("character11").innerHTML == ""
  }

  if(letter1 == 12 || letter2 == 12 || letter3 == 12 || letter4 == 12){
    document.getElementById("character12").innerHTML == ""
  }

  if(letter1 == 13 || letter2 == 13 || letter3 == 13 || letter4 == 13){
    document.getElementById("character13").innerHTML == ""
  }

  if(letter1 == 14 || letter2 == 14 || letter3 == 14 || letter4 == 14){
    document.getElementById("character14").innerHTML == ""
  }

  if(letter1 == 15 || letter2 == 15 || letter3 == 15 || letter4 == 15){
    document.getElementById("character15").innerHTML == ""
  }
  
  if(letter1 == 16 || letter2 == 16 || letter3 == 16 || letter4 == 16){
    document.getElementById("character16").innerHTML == ""
  }

  if(letter1 == 17 || letter2 == 17 || letter3 == 17 || letter4 == 17){
    document.getElementById("character17").innerHTML == ""
  }

  if(letter1 == 18 || letter2 == 18 || letter3 == 18 || letter4 == 18){
    document.getElementById("character18").innerHTML == ""
  }

  if(letter1 == 19 || letter2 == 19 || letter3 == 19 || letter4 == 19){
    document.getElementById("character19").innerHTML == ""
  }

  if(letter1 == 20 || letter2 == 20 || letter3 == 20 || letter4 == 20){
    document.getElementById("character20").innerHTML == ""
  }

  if(letter1 == 21 || letter2 == 21 || letter3 == 21 || letter4 == 21){
    document.getElementById("character21").innerHTML == ""
  }

  if(letter1 == 22 || letter2 == 22 || letter3 == 22 || letter4 == 22){
    document.getElementById("character22").innerHTML == ""
  }

  if(letter1 == 23 || letter2 == 23 || letter3 == 23 || letter4 == 23){
    document.getElementById("character23").innerHTML == ""
  }

  if(letter1 == 24 || letter2 == 24 || letter3 == 24 || letter4 == 24){
    document.getElementById("character24").innerHTML == ""
  }

  if(letter1 == 25 || letter2 == 25 || letter3 == 25 || letter4 == 25){
    document.getElementById("character25").innerHTML == ""
  }
}
function solve2(){
  
}

function solve3(){
  
}

function solve4(){
  
}

function solve5(){
  
}

function solve6(){
  
}

function solve7(){
  
}

function solve8(){
  
}

function solve9(){
  
}

function solve10(){
  
}