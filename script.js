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

