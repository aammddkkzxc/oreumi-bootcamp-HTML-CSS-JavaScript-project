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
}// 백틱 문자열 쓰면 더 간단
// 넘어오는 datas수만큼 반복문 => forEach
window.addEventListener('scroll', ()=>{
    //스크롤이 상단으로부터 얼마나 이동했는지 알아야합니다. (뷰포트의 높이 + 스크롤된 길이)
    //화면에 로딩된 페이지의 전체 높이
    //뷰포트의 높이 + 스크롤된 길이 + 5~10px = 화면에 로딩된 페이지의 전체 높이
    if (!isFetching && window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
        isFetching = true;
        fetchImages(pageToFetch += 1).finally(() => {
            isFetching = false;
        });
    }
    //offsetHeingt => 패딩과 테두리를 다 포함한
})
//scroll 무디게 만들어 줘야 한다 힌트 쓰로틀링
// 이미지가 너무 많이 로드됨

showMoreBtn.addEventListener('click', () => {
    fetchImages(pageToFetch += 1);
});
