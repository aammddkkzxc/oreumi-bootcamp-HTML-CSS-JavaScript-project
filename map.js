/*                   뼈대 시작                 */
let map;
let mapContainer;
let mapOption;

function setMap() {
    mapContainer = document.getElementById('map_wrap'); // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.442356231224345, 126.57190681471637), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    map = new kakao.maps.Map(mapContainer, mapOption);
    setMarker();
}

// 마커를 만드는 함수
function setMarker() {
    let imageSrc = 'images/representation_img.png', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(33.442356231224345, 126.57190681471637); // 마커가 표시될 위치입니다
// 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정
    });
// 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
// 마커 드래그 허용
    marker.setDraggable(true);
}

/*                   뼈대 끝                 */

setMap();

/*               이벤트 함수 시작             */

// 지도 타입 설정 함수
function setMapType(maptype) {
    let roadmapControl = document.getElementById('btnRoadmap');
    let skyviewControl = document.getElementById('btnSkyview');
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

// 지도 확대 함수 //
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 축소 함수 //
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}


// 지도 초기화 함수 //
function initializeScreen() {
    setMap();
}

// 풀 스크린 기능 함수 //
function openFullScreen() {
    if(!mapContainer) alert("specify element for full screen.")
    if (mapContainer.requestFullscreen) {
        mapContainer.requestFullscreen();
    } else if (mapContainer.mozRequestFullScreen) { /* Firefox */
        mapContainer.mozRequestFullScreen();
    } else if (mapContainer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        mapContainer.webkitRequestFullscreen();
    } else if (mapContainer.msRequestFullscreen) { /* IE/Edge */
        mapContainer.msRequestFullscreen();
    }
}

//연습중
// mapContainer.addEventListener('wheel', function(event) {
//     if (!event.ctrlKey) { // Ctrl 키가 눌리지 않은 경우에만 스크롤 막기
//         setZoomable(false);
//     }
// });
//
// function setZoomable(zoomable) {
//     // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
//     map.setZoomable(zoomable);
// }
