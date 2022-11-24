let slideIndex;
const slides = document.getElementsByClassName('slide-show');
const dot =  document.getElementsByClassName('dot');

function showSlide(){
    for(const slide of slides){
        slide.classList.remove('active');
    }
    slides[slideIndex].classList.add('active');

    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }
    setTimeout(showSlide, 4000);
}
showSlide(slideIndex=0)
