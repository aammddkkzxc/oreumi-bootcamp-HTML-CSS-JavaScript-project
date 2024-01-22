const scrollBtn = document.getElementById('scroll_btn');
let scrollInterval;
const subscribeBtn = document.getElementById('subscribe_container_submit');
let emailInput = document.getElementById('subscribe_container_input');
const modal = document.querySelector('#modal_scope');
const modalBtn = document.getElementById('modal_btn');

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


function enter() {
    if (emailInput.keyCode === 13) {
    }
}

subscribeBtn.addEventListener('click', function validateEmail() {
    let email = emailInput.value;

    if (emailCheck(email)) {
        modal.style.display='flex';
    } else {
        alert('유효하지 않는 이메일 주소입니다.');
        emailInput.focus();
    }
})

function emailCheck(email_address){
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(email_address);
}

modalBtn.addEventListener('click', function () {
    closeModal();
})

function closeModal() {
    modal.style.display='none';
}