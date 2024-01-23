/* 스크롤 이벤트 시작 */

//스크롤 변수
const scrollBtn = document.getElementById('scroll_btn');
let scrollInterval;

//스크롤 이벤트리스너
scrollBtn.addEventListener('mouseenter', function() {scrollUp();
});
scrollBtn.addEventListener('mouseleave', function() {
    clearInterval(scrollInterval);
});

//스크롤 위로 함수
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

/* 구독 이벤트 시작 */

//구독 이벤트 변수
const subscribeBtn = document.getElementById('subscribe_container_submit');
const emailInput = document.getElementById('subscribe_container_input');
const loadingImg = document.getElementById('loading');
const modal = document.querySelector('#modal_scope');
const modalBtn = document.getElementById('modal_btn');

//구독 일련의 과정 이벤트 리스너 (버튼클릭,엔터키입력=>유검사=>모달창)
subscribeBtn.addEventListener('click', loadEmail);
emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        loadEmail();
    }
});
modalBtn.addEventListener('click', function () {
    closeModal();
})

//구독 전체 실행 함수, 입력되면 이미지로 로딩을 알림
function loadEmail() {
    loadingImg.style.display ='flex';
    setTimeout(()=>{loadingImg.style.display ='none'; validateEmail();}, 1500);
}

//이메일 유효성 검사, 통과시 모달 팝업, 실패시 알림창
function validateEmail() {
    let email_address = emailInput.value;

    if (isFitEmailRegex(email_address)) {
        modal.style.display = 'flex';
    } else {
        alert('유효하지 않는 이메일 주소입니다.');
        emailInput.focus();
    }
}

//이메일 유효성 정규식 검사
function isFitEmailRegex(email_address){
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(email_address);
}

//모달 닫기
function closeModal() {
    modal.style.display='none';
}

/* 구독 이벤트 끝 */