// JavaScript source code
// �Զ���������
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// ����Ŵ�Ч��
document.addEventListener('click', () => {
    cursor.classList.add('click-effect');
    setTimeout(() => cursor.classList.remove('click-effect'), 300);
});

document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.getElementById("cursor-dot");
    const links = document.querySelectorAll("a"); // ��ȡ���г�����

    // ����������
    document.addEventListener("mousemove", function (e) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });

    // ���������� hover ״̬���л�����С
    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            cursorDot.classList.add("hover");
        });
        link.addEventListener("mouseleave", function () {
            cursorDot.classList.remove("hover");
        });
    });
});

