$('.navi>li').mouseover(function(){
    $('.submenu').stop().slideDown(400); //스탑없으면 업다운 무한반복함 
}).mouseout(function(){
    $('.submenu').stop().slideUp(400);
});


document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    const ellipses = document.querySelectorAll('.ellipse');

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === n); // 활성화된 슬라이드에 .active 클래스 추가
        });
        ellipses.forEach((ellipse, index) => {
            ellipse.classList.toggle('active', index === n); // 활성화된 ellipse에 .active 클래스 추가
        });
        currentSlide = n;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    showSlide(currentSlide); // 초기 슬라이드 표시
    setInterval(nextSlide, 5000); // 5초마다 자동 슬라이드

    // 각 ellipse 버튼에 클릭 이벤트 추가
    ellipses.forEach((ellipse, index) => {
        ellipse.addEventListener('click', () => {
            showSlide(index); // 클릭한 ellipse에 해당하는 슬라이드로 이동
        });
    });
});
