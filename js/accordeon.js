// аккордеон
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-btn');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.closest('.accord-dev').querySelector('.accordion-content');

            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });

            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
