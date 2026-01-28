document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuContainer = document.getElementById('menu-container');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const lunchMenus = [
        { name: "김치찌개", image: "https://static.photos/food/600/400" },
        { name: "된장찌개", image: "https://static.photos/food/600/400" },
        { name: "부대찌개", image: "https://static.photos/food/600/400" },
        { name: "순두부찌개", image: "https://static.photos/food/600/400" },
        { name: "제육볶음", image: "https://static.photos/food/600/400" },
        { name: "오징어볶음", image: "https://static.photos/food/600/400" },
        { name: "불고기", image: "https://static.photos/food/600/400" },
        { name: "돈까스", image: "https://static.photos/food/600/400" },
        { name: "비빔밥", image: "https://static.photos/food/600/400" },
        { name: "김밥", image: "https://static.photos/food/600/400" },
        { name: "라면", image: "https://static.photos/food/600/400" },
        { name: "떡볶이", image: "https://static.photos/food/600/400" },
        { name: "짜장면", image: "https://static.photos/food/600/400" },
        { name: "짬뽕", image: "https://static.photos/food/600/400" },
        { name: "탕수육", image: "https://static.photos/food/600/400" },
        { name: "볶음밥", image: "https://static.photos/food/600/400" },
        { name: "초밥", image: "https://static.photos/food/600/400" },
        { name: "우동", image: "https://static.photos/food/600/400" },
        { name: "라멘", image: "https://static.photos/food/600/400" },
        { name: "카레", image: "https://static.photos/food/600/400" },
        { name: "햄버거", image: "https://static.photos/food/600/400" },
        { name: "피자", image: "https://static.photos/food/600/400" },
        { name: "파스타", image: "https://static.photos/food/600/400" },
        { name: "샌드위치", image: "https://static.photos/food/600/400" },
        { name: "쌀국수", image: "https://static.photos/food/600/400" },
        { name: "분짜", image: "https://static.photos/food/600/400" },
        { name: "팟타이", image: "https://static.photos/food/600/400" },
        { name: "나시고랭", image: "https://static.photos/food/600/400" }
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
                <img src="${selectedMenu.image}" alt="${selectedMenu.name}" class="menu-image">
                <span>${selectedMenu.name}</span>
            </div>
        `;
    }
});
