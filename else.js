const scrollBtn = document.getElementById('scroll_btn');

scrollBtn.addEventListener('mouseenter', function() {
    scrollUp();
});

function scrollUp() {
    const scrollTime = 1000; // 스크롤이 완료되기까지의 시간 (밀리초)
    const scrollLength = -window.scrollY / (scrollTime / 10);

    if (window.scrollY !== 0) {
        window.scrollBy(0, scrollLength);
    }
}