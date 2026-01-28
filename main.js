document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuContainer = document.getElementById('menu-container');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const lunchMenus = [
        "김치찌개", "된장찌개", "부대찌개", "순두부찌개",
        "제육볶음", "오징어볶음", "불고기", "돈까스",
        "비빔밥", "김밥", "라면", "떡볶이",
        "짜장면", "짬뽕", "탕수육", "볶음밥",
        "초밥", "우동", "라멘", "카레",
        "햄버거", "피자", "파스타", "샌드위치",
        "쌀국수", "분짜", "팟타이", "나시고랭"
    ];

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'White Mode';
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            recommendLunchMenu();
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeToggleBtn.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'light-mode');
            } else {
                themeToggleBtn.textContent = 'White Mode';
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }

    function recommendLunchMenu() {
        if (!menuContainer) return;
        const randomIndex = Math.floor(Math.random() * lunchMenus.length);
        const selectedMenu = lunchMenus[randomIndex];
        menuContainer.innerHTML = `
            <div class="menu-item">
                <span>${selectedMenu}</span>
            </div>
        `;
    }
});
