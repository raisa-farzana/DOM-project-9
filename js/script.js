let currentIndex = 0;
const showSlide = (index) => {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    // if(index >= totalSlides){
    //     currentIndex = 0;
    // }
    // else if(index < 0){
    //     currentIndex = totalSlides - 1
    // }
    // else{
    //     currentIndex = index;
    // }

    currentIndex = (index + totalSlides) % totalSlides;

    slides.style.transform = `translateX(${-currentIndex * 100}%)`
}

const prevSlide = () => {
    showSlide(currentIndex - 1);
    
}

const nextSlide = () => {
    showSlide(currentIndex + 1);
    
}
