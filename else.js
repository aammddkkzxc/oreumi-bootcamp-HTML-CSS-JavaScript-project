const scrollBtn = document.getElementById('scroll_btn');

scrollBtn.addEventListener('mouseenter', function() {
    scrollUp();
});

scrollBtn.addEventListener('mouseleave', function() {
    clearInterval(scrollInterval);
});

function scrollUp() {
    const scrollTime = 1000;
    const scrollLength = -window.scrollY / (scrollTime / 20);

    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollLength);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
}