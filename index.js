// getRandom(min, max)
// move(dom, prop, start, end, time, fn)
// ele.clearInterval();

// 1. 计时功能
var tNumber = 0;
var tDom = document.getElementById("timer");
var ttid = setInterval(function () {
  tNumber++;
  tDom.innerText = tNumber;
}, 1000);

// 2. 生成气球
// 可视区域内 innerWidth innerHeight
// 不断生成 setInterval
// img元素 document.createElement('img')

// 生成气球
function createLetter() {
  var img = document.createElement("img");
  // 初始位置
  img.style.top = innerHeight + "px";
  // 随机 0， innerWidth-80
  img.style.left = getRandom(0, innerWidth - 80) + "px";

  // 引入图片
  var letter = String.fromCharCode(parseInt(getRandom(97, 123)));
  img.title = letter;
  img.src = "./img/" + letter + ".png";
  document.body.appendChild(img);
  move(img, "top", innerHeight, 0, 5000, function () {
    // 到顶了 gameover
    gameOver();
  });
}

// 不断
var createId = setInterval(function () {
  createLetter();
}, 500);

// 键盘事件
var score = 0;
var scoreDom = document.getElementById("score");
var imgs = document.getElementsByTagName("img");

document.body.onkeydown = function (e) {
  for (var i = 0; i < imgs.length; i++) {
    if (e.key === imgs[i].title) {
      imgs[i].clearInterval();
      document.body.removeChild(imgs[i]);
      score++;
      scoreDom.innerText = score;
      break;
    }
  }
};

// 4. gameOver

function gameOver() {
  // 取消事件
  document.body.onkeydown = null;
  // 关闭定时器
  clearInterval(ttid);
  clearInterval(createId);
  // 每个img定时器
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].clearInterval();
  }
  alert("最终得分" + score);
}

// 不到50行！

// 所有js不到80行

// zuotian9652;
