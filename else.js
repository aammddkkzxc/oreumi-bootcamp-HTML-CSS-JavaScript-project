const scrollBtn = document.getElementById('scroll_btn');
let scrollInterval;

scrollBtn.addEventListener('mouseenter', function() {
    scrollUp();
});

scrollBtn.addEventListener('mouseleave', function() {
    clearInterval(scrollInterval);
});

function scrollUp() {
    const scrollTime = 1000;
    const scrollLength = -window.scrollY / (scrollTime / 10);

    scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollLength);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}