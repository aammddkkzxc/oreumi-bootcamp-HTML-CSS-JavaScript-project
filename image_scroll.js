const infiniteScrollManageBtn = document.getElementById('infinite_scroll_manage_btn');
const imageContainer = document.getElementById('magazine_scroll_container');
let imageList = document.getElementById('magazine_scroll_contents');

let page = 1;
let throttled = false;
let infiniteScrollActive = false;

infiniteScrollManageBtn.addEventListener('click', switchOnOff);

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

function stopInfiniteScroll() {
    imageContainer.style.overflowY = 'hidden';
    imageContainer.removeEventListener('scroll', controlScroll);
    page = 1;
}

function controlScroll() {
    const isScrolledToBottom = imageContainer.scrollHeight - imageContainer.clientHeight <= imageContainer.scrollTop + 1;

    if (isScrolledToBottom) {
        fetchImages();
    }
}

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

function makeImageList(datas) {
    let html = '';

    datas.forEach((item) => {
        html += `<img src="${item.download_url}" alt=" ">`;
    });

    imageList.innerHTML += html;
}