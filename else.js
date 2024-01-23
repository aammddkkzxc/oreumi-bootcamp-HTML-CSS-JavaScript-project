const scrollBtn = document.getElementById('scroll_btn');
let scrollInterval;
const subscribeBtn = document.getElementById('subscribe_container_submit');
let emailInput = document.getElementById('subscribe_container_input');
const loadingImg = document.getElementById('loading');
const modal = document.querySelector('#modal_scope');
const modalBtn = document.getElementById('modal_btn');

/* 스크롤 이벤트 시작*/

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

/* 스크롤 이벤트 끝 */

/* subscribe 이벤트 시작 */

subscribeBtn.addEventListener('click', loadEmail);
emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        loadEmail();
    }
});

function loadEmail() {
    loadingImg.style.display ='flex';
    setTimeout(()=>{loadingImg.style.display ='none'; validateEmail();}, 2000);
}

function validateEmail() {
    let email_address = emailInput.value;

    if (isFitEmailRegex(email_address)) {
        modal.style.display = 'flex';
    } else {
        alert('유효하지 않는 이메일 주소입니다.');
        emailInput.focus();
    }
}


function isFitEmailRegex(email_address){
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(email_address);
}

modalBtn.addEventListener('click', function () {
    closeModal();
})

function closeModal() {
    modal.style.display='none';
}

/* subscribe 이벤트 끝 */