
window.addEventListener('scroll', () => {
    const section4 = document.querySelector('.section-4');
    const imgContainer = document.querySelector('.about-img-container');
    
    if (section4 && imgContainer) {

        const rect = section4.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const headerHeight = 70; 
        


        let progress = 1 - ((rect.top - headerHeight) / (windowHeight - headerHeight));
        

        progress = Math.max(0, Math.min(1, progress));
        


        const currentSize = 10 + (90 * progress);
        

        imgContainer.style.width = currentSize + '%';
        imgContainer.style.height = currentSize + '%';
    }
});


window.addEventListener('scroll', () => {
    const section5 = document.querySelector('.section-5');
    const sec5ImgContainer = document.querySelector('.sec5-img-container');
    
    if (section5 && sec5ImgContainer) {
        const rect = section5.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        

        let progress = 1 - (rect.top / windowHeight);
        

        progress = Math.max(0, Math.min(1, progress));
        

        const currentSize = 10 + (90 * progress);
        

        sec5ImgContainer.style.width = currentSize + '%';
        sec5ImgContainer.style.height = currentSize + '%';
    }
});