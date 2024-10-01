
document.addEventListener("DOMContentLoaded", function() {
    const blockg = document.querySelector('.faq');
    const upButton = document.querySelector('.num');

    upButton.style.display = 'none'; 


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                upButton.style.display = 'block'; 
            } else {
                upButton.style.display = 'none'; 
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(blockg);
});
