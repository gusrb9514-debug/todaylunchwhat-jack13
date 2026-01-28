document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers-container');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    generateBtn.addEventListener('click', () => {
        generateAndDisplayNumbers();
    });

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = 'Dark Mode';
        } else {
            themeToggleBtn.textContent = 'White Mode';
        }
    });

    function generateAndDisplayNumbers() {
        numbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberBall = document.createElement('div');
            numberBall.classList.add('number-ball');
            numberBall.textContent = number;
            numbersContainer.appendChild(numberBall);
        });
    }
});
