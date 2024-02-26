const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const hidden1 = document.querySelector('.hidden1');
const hidden2 = document.querySelector('.hidden2');
const hidden3 = document.querySelector('.hidden3');
const hidden4 = document.querySelector('.hidden4');
const openBtn1 = document.querySelector('.openBtn1');
const openBtn2 = document.querySelector('.openBtn2');
const openBtn3 = document.querySelector('.openBtn3');
const openBtn4 = document.querySelector('.openBtn4');

btn1.addEventListener('click', () => {
  if (hidden1.className === 'hidden1') {
    hidden1.className = 'hidden1 Open';
    hidden1.style.display = 'block';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-minus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  } else {
    hidden1.className = 'hidden1';
    hidden1.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  }
});

btn2.addEventListener('click', () => {
  if (hidden2.className === 'hidden2') {
    hidden2.className = 'hidden2 Open';
    hidden1.style.display = 'none';
    hidden2.style.display = 'block';
    hidden3.style.display = 'none';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-minus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  } else {
    hidden2.className = 'hidden2';
    hidden1.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  }
});

btn3.addEventListener('click', () => {
  if (hidden3.className === 'hidden3') {
    hidden3.className = 'hidden3 Open';
    hidden1.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'block';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-minus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  } else {
    hidden3.className = 'hidden3';
    hidden1.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  }
});

btn4.addEventListener('click', () => {
  if (hidden4.className === 'hidden4') {
    hidden4.className = 'hidden4 Open';
    hidden1.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    hidden4.style.display = 'block';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-minus.svg';
  } else {
    hidden4.className = 'hidden4';
    hidden1.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    hidden4.style.display = 'none';
    openBtn1.src = 'components/assets/images/icon-plus.svg';
    openBtn2.src = 'components/assets/images/icon-plus.svg';
    openBtn3.src = 'components/assets/images/icon-plus.svg';
    openBtn4.src = 'components/assets/images/icon-plus.svg';
  }
});
