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

// for(let i = 1; i <= 4; i++){
//     let kbbutton = Math.round(Math.random()*26);
//     let z = document.getElementById(`button${kbbutton}`).innerText
//     let x = `rand${i}`;
//     document.getElementById(`character${x}`).innerText = z;
// }

function fill(character){
 for(let i = 1; i <= 25; i++){
 let x = document.getElementById(`character${i}`).innerText
 console.log(x);
 if(x == ""){
  
  document.getElementById(`character${i}`).innerText = character
  return
 }
 }
}


function del(){
    for(let i = 25;i >= 1;i--){
        let y = document.getElementById(`character${i}`).innerText
        if(i == array[0] || i == array[1] || i == array[2] || i == array[3]){
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

let array = [

]

function makeid() {
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < 4; i++ ) {
        let n = Math.ceil((Math.random() + 0.001) * charactersLength);
        switch(n){
            case 0:
                n = 1;
                break;
            case 26:
                n = 25;
                break;
        }
        result = characters.charAt(n);
        
        let v = Math.ceil((Math.random() + 0.001)*25);
        do {   
            v = Math.ceil((Math.random() + 0.001)*25);
            console.log(v);
        } 
        while (document.getElementById(`character${v}`).innerText != "");
        document.getElementById(`character${v}`).innerText = result
        console.log(result);
        array.push(v);
    }
    console.log(array);
    return result;
}

