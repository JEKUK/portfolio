

$(function(){
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors:['section1','section2','section3','section4','section5','section6'],
        sectionsColor:['#3988ff','#3988ff','#3988ff','#3988ff','#3988ff'],
        autoScrolling:true,
        loopHorizontal:true,
        

        onLeave:function(index,nextIndex,dirction){
            if(nextIndex==1){
                $('header').css('background-color','#3988ff');
            }else{
                $('header').css('background-color','black');
            }
        }
    });
});



const totalImages = 21; 
const imagePrefix = "night"; 
const imageExtension = ".jpg"; 

const container = document.getElementById("movpic"); 
let currentIndex = 0;


for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `images/${imagePrefix}${i}${imageExtension}`;
    img.alt = `${imagePrefix}${i}`;
    container.appendChild(img);
}

// 모든 이미지 태그 선택
const images = container.querySelectorAll("img");

// 첫 번째 이미지 표시
if (images.length > 0) images[currentIndex].style.display = "block";

// 이미지 애니메이션
function showNextImage() {
    images[currentIndex].style.display = "none"; 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].style.display = "block"; 
}

// 200ms 간격으로 애니메이션 실행
setInterval(showNextImage, 200);









const pTag1 = document.querySelector('.first-parallel');
const pTag2 = document.querySelector('.second-parallel');
const pTag3 = document.querySelector('.third-parallel');
const pTag4 = document.querySelector('.forth-parallel');

const textArr1 = 'Html 80% Css70% Useful Coding Html 80% Css70% Useful Coding'.split(' ');
const textArr2 = 'Photoshop & Illustrator 70%  Photoshop & Illustrator 70% Photoshop & Illustrator '.split(' ');
const textArr3 = 'Javascript & JQuery each 50% & 60% '.split(' ');
const textArr4 = 'Premiere Pro 80% Can make video '.split(' ');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);
initTexts(pTag3, textArr3);
initTexts(pTag4, textArr4);

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
  };
};

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  };
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
};

function animate() {
  count1++
  count2++
  count3++
  count4++

  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, 1)
  count3 = marqueeText(count3, pTag3, -1)
  count4 = marqueeText(count4, pTag4, 1)

  window.requestAnimationFrame(animate)
};
animate();