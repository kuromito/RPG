const gameImage = document.getElementById('gameImage');
const overlay = document.getElementById('overlay');
const moveButton = document.getElementById('moveButton');
const yesNoButtons = document.getElementById('yesNoButtons');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const leaveButton = document.getElementById('leaveButton');
const buttons = [moveButton, yesButton, noButton, leaveButton];

const disableButtons = () => {
  buttons.forEach(button => {
    button.disabled = true;
  });
};

const enableButtons = () => {
  buttons.forEach(button => {
    button.disabled = false;
  });
};

const animate = () => {
  disableButtons();
  // オーバーレイのアニメーション
  overlay.style.animation = 'fade 1.5s forwards';

  // 画像のズームインアニメーション
  gameImage.style.transition = 'transform 1.5s';
  gameImage.style.transform = 'scale(1.2)';

  // アニメーションのリセット
  setTimeout(() => {
    overlay.style.animation = '';
    gameImage.style.transition = '';
    gameImage.style.transform = '';
    enableButtons();
  }, 1500);
  
};
const animateReset = () => {
  gameImage.style.transition = 'transform 0s';
  gameImage.style.transform = 'scale(1.0)';
}
moveButton.addEventListener('click', () => {
  animate();

  // 画像の切り替え
  setTimeout(() => {
    animateReset();
    const randomNum = Math.random();
    if (randomNum < 0.4) {
      gameImage.src = 'img/door1.png';
      gameImage.alt = '扉を発見しました';
      yesNoButtons.style.display = 'block';
      moveButton.style.display = 'none';
      leaveButton.style.display = 'none';
    } else {
      gameImage.src = 'img/road.png';
      gameImage.alt = '進行中';
      yesNoButtons.style.display = 'none';
      moveButton.style.display = 'block';
      leaveButton.style.display = 'none';
    }
  }, 750);
});

yesButton.addEventListener('click', () => {
  animate();
  setTimeout(() => {
    animateReset();
    const rooms = ['img/room1.png', 'img/room2.png', 'img/room3.png'];
    const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
    gameImage.src = randomRoom;
    gameImage.alt = '部屋に到達しました';
    yesNoButtons.style.display = 'none';
    moveButton.style.display = 'none';
    leaveButton.style.display = 'block';
  }, 750);
});

noButton.addEventListener('click', () => {
  animate();
  setTimeout(() => {
    animateReset();
    gameImage.src = 'img/road.png';
    gameImage.alt = '進行中';
    yesNoButtons.style.display = 'none';
    moveButton.style.display = 'block';
    leaveButton.style.display = 'none';
  }, 750);
});

leaveButton.addEventListener('click', () => {
  animate();
  setTimeout(() => {
    animateReset();
    gameImage.src = 'img/road.png';
    gameImage.alt = '進行中';
    yesNoButtons.style.display = 'none';
    moveButton.style.display = 'block';
    leaveButton.style.display = 'none';
  }, 750);
});
