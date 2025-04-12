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

document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.getElementById("cursor-dot");
    const links = document.querySelectorAll("a"); // 获取所有超链接

    // 让鼠标光标跟随
    document.addEventListener("mousemove", function (e) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });

    // 监听超链接 hover 状态，切换光标大小
    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            cursorDot.classList.add("hover");
        });
        link.addEventListener("mouseleave", function () {
            cursorDot.classList.remove("hover");
        });
    });
});

