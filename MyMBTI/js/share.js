const url = 'https://wootwelve.netlify.app/';

function kakaoShare() {
  let resultImg = document.querySelector('#resultImg');
  let resultAni = resultImg.firstElementChild.alt;

  const shareTitle = "십이간지 연애유형 결과";
  const shareDesc = infoList[aniArr.indexOf(resultAni)].name;
  const shareImgURL = url + 'img/' + resultAni + '.jpg';
  const shareLink = url + 'page/result-' + resultAni + '.html'; 

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDesc,
      imageUrl: shareImgURL,
      link: {
        mobileWebUrl: shareLink,
        webUrl:shareLink,
      },
    },
    
    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink
        },
      },
    ],
  });
}