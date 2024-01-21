var mapContainer = document.getElementById('contact_map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.442356231224345, 126.57190681471637), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
///체크

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


function setMapType(maptype) {
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview');
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

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}

// 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);
}
//
// var imageSrc = 'images/representation_img.png', // 마커이미지의 주소입니다
//     imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//     imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
//
// // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//     markerPosition = new kakao.maps.LatLng(33.442356231224345, 126.57190681471637); // 마커가 표시될 위치입니다
//
// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition,
//     image: markerImage // 마커이미지 설정
// });
//
// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);
//
// marker.setDraggable(true);
//
// // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
