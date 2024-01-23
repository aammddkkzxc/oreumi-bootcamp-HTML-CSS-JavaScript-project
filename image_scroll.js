//무한 스크롤 변수
const infiniteScrollManageBtn = document.getElementById('infinite_scroll_manage_btn');
const imageContainer = document.getElementById('magazine_scroll_container');
const imageList = document.getElementById('magazine_scroll_contents');
let page = 1;
let throttled = false;
let infiniteScrollActive = false;

//무한 스크롤 버튼 이벤트 리스너
infiniteScrollManageBtn.addEventListener('click', switchOnOff);

//켜고 끄기 함수
function switchOnOff() {
    if(!infiniteScrollActive) {
        activateInfiniteScroll();
        infiniteScrollActive = true;
        infiniteScrollManageBtn.textContent = "Stop";
    }
    else {
        stopInfiniteScroll();
        infiniteScrollActive = false;
        infiniteScrollManageBtn.textContent = "Show more";
    }
}

//무한 스크롤 시작 함수
function activateInfiniteScroll() {
    imageContainer.style.overflowY = 'scroll';

    imageContainer.addEventListener('scroll', function () {
        if (!throttled) {
            throttled = true;
            setTimeout(() => {
                controlScroll();
                throttled = false;
            }, 300);
        }
    });

    imageContainer.dispatchEvent(new Event('scroll'));
}

//무한 스크롤 중지 함수
function stopInfiniteScroll() {
    imageContainer.style.overflowY = 'hidden';
    imageContainer.removeEventListener('scroll', controlScroll);
    page = 1;
}

//스크롤 제어 함수
function controlScroll() {
    const isScrolledToBottom = imageContainer.scrollHeight - imageContainer.clientHeight <= imageContainer.scrollTop + 1;

    if (isScrolledToBottom) {
        fetchImages();
    }
}

//이미지 가져오는 함수
async function fetchImages() {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);

        makeImageList(datas);

        page++;

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

//이미지 추가 함수
function makeImageList(datas) {
    let html = '';

    datas.forEach((item) => {
        html += `<img src="${item.download_url}" alt=" ">`;
    });

    imageList.innerHTML += html;
}