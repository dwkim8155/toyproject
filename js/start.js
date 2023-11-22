const windowWidth = window.innerWidth;
let mainTitle = document.getElementById('main-title');

if (windowWidth <= 400) {
  console.log(windowWidth);
  mainTitle.style.fontSize = "30px";
}

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const select = [];
const endPoint = 12;

const aniArr = ['mouse', 'cow', 'tiger', 'rabbit', 
'dragon', 'snake', 'horse', 'sheep', 'monkey', 'chick',
'dog', 'pig']

function calResult() {
  const pointArr = {}
  for (let i=0; i<endPoint; ++i) {
    pointArr[aniArr[i]] = {value:0, key:i}
  }

  for (let i=0; i<endPoint; ++i) {
    let resultArr = qnaList[i].a[select[i]].type;
    resultArr.forEach(element => {
      pointArr[element].value+=1;
    });
    }
  
  let maxValue = -1;
  let maxAni;

  for (let ani in pointArr) {
    if (pointArr[ani].value > maxValue) {
      maxValue = pointArr[ani].value;
      maxAni = ani; 
    }
  }

  return {name:maxAni, key:pointArr[maxAni].key};
}

function setResult() {
  let pointAni = calResult();
  const resultName = document.querySelector('.resultName');
  resultName.innerHTML = '<mark>'+infoList[pointAni.key].name+'</mark>'

  let resultImg = document.createElement('img');
  const imgURL = './img/'+pointAni.name+'.jpg';
  
  resultImg.src = imgURL;
  resultImg.alt = pointAni.name;
  resultImg.classList.add("img-fluid");

  const imgDiv = document.querySelector('#resultImg');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('#resultDesc');
  resultDesc.innerHTML = infoList[pointAni.key].desc;

}

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s"
  setTimeout(()=>{
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display="none";
      result.style.display="block";
    }, 50);
  },900);
  setResult();
}

function goNext(qIdx) {
  
  let q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  let status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint)*(qIdx)+'%';
}

function addAnswer(answerText, qIdx, idx) {
  let a = document.querySelector('.answerBox');
  let ansButton = document.createElement('button');
  ansButton.innerHTML = answerText;
  ansButton.className = 'aButton';
  ansButton.classList.add('my-3');
  ansButton.classList.add('py-3');
  ansButton.classList.add('mx-auto');
  ansButton.classList.add('fadeIn');
  a.appendChild(ansButton);

  ansButton.addEventListener('click', function() {

    select[qIdx] = idx;
    let childrenList = document.querySelectorAll('.aButton');
    for (let i=0; i<childrenList.length; ++i) { 
      childrenList[i].disabled = true;
      if ((qIdx+1) !== endPoint) {
      childrenList[i].classList.add('fadeOut');
      }
    }
    
    if((qIdx+1) === endPoint) {
      goResult();
      return;
    }
    
    setTimeout(()=>{
      for (let i=0; i<childrenList.length; ++i) { 
      childrenList[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);

}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s"
  setTimeout(()=>{
    qna.style.display="block";
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    let qIdx = 0;
    goNext(qIdx); 
    setTimeout(() => {
      main.style.display="none";
    }, 50);
  },900);
}
