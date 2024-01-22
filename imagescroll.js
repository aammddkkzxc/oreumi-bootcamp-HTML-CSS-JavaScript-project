const imageContainer = document.querySelector("#article_magazine_img_container");
const showMoreBtn = document.getElementById('show_more_btn');
let pageToFetch = 1;

async function fetchImages(pageNum){
    try {
        const response = await fetch('https://picsum.photos/v2/list?page='+pageNum+'&limit=3'); // 페이지, 리미트 설정
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        const datas = await response.json();
        console.log(datas);
        addImage(datas);
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function addImage(datas) {
    datas.forEach((item)=>{
        imageContainer.innerHTML = imageContainer.innerHTML + "<img src="+ item.download_url +" alt=' '>";
    });
    //.innerHTML = "<li><img src=" +datas.[0].download.url + " alt=' '><li>";
}

showMoreBtn.addEventListener('click', () => {
    fetchImages(pageToFetch += 1);
});

imageContainer.addEventListener('scroll', function () {
    // 스크롤 위치 확인
    const isScrolledToBottom = imageContainer.scrollHeight - imageContainer.clientHeight <= imageContainer.scrollTop + 1;

    // 스크롤이 맨 아래에 도달하면 새로운 데이터 로드
    if (isScrolledToBottom) {
        fetchImages(pageToFetch += 1)
    }
});