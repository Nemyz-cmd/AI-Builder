const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of numbers) {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        numbersContainer.appendChild(circle);
    }
});

const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.querySelector('label[for="theme-switch"]');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeLabel.textContent = '라이트 모드로 전환';
    } else {
        themeLabel.textContent = '다크 모드로 전환';
    }
});