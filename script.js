// JavaScript source code
// 自定义鼠标跟随
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// 点击放大效果
document.addEventListener('click', () => {
    cursor.classList.add('click-effect');
    setTimeout(() => cursor.classList.remove('click-effect'), 300);
});

