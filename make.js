const movingText = document.getElementById("animated-text");


let isMoving = false;

startButton.addEventListener("click", () => {
  if (!isMoving) {
    moveText();
    isMoving = true;
  }
});

function moveText() {
  const animationDuration = 2000; 
  
  // 上に移動
  movingText.style.transform = "translateY(-50px)";
  setTimeout(() => {
    // 下に戻る
    movingText.style.transform = "translateY(0)";
  }, animationDuration);

  // 左に移動
  setTimeout(() => {
    movingText.style.transform = "translateX(-50px)";
  }, animationDuration * 2);
  
  // 右に戻る
  setTimeout(() => {
    movingText.style.transform = "translateX(0)";
    isMoving = false; 
  }, animationDuration * 3);
}