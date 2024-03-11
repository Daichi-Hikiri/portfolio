const texts = document.querySelectorAll('.text'); //クラス名"text"をもつ要素のリストを取得
let i = 1;

// My Your Our を順番に表示させる処理
function textDisplay() {
  //クラス名"display"を取得したリスト順に付け外し
  texts.forEach(text => {
    text.classList.remove('display');    
  });

  texts[i].classList.add('display');
  i++;
  //カウンタリセット
  if (i > 2) {
    i = 0;
  };
};
//テキスト表示のインターバル
setInterval(textDisplay, 3000);


// 背景動画の再生速度
const video = document.getElementById('background-video');
video.playbackRate = 0.6;