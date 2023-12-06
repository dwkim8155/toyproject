function createNum() {
  const lotto_pb = document.querySelector('.lotto_number');
  const token = String(Math.floor(Math.random()*1000000)).padStart(6,'0');
  for (let i=0; i<6; i++) {
    lotto_pb.children[i].innerHTML = token[i]
  }
}

function wordCheck() {
  
  const myWord = document.querySelector('#word')
  const wordBox  = document.querySelector('#myword');
  const inputValue = wordBox.value
  const wordResult = document.querySelector('#result')

  let lNum = myWord.innerHTML.length-1

  if (myWord.innerHTML[lNum]===inputValue[0]) {
    wordResult.innerHTML = '성공!';
    myWord.innerHTML = inputValue;
  } else {
    wordResult.innerHTML = '실패!';
  }
  wordBox.value = null;
  
}


const ltButton = document.querySelector('#lotto_button');
const wdButton = document.querySelector('.search');

ltButton.onclick = createNum;
wdButton.onclick = wordCheck;