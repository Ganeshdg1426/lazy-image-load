document.addEventListener("DOMContentLoaded", () =>{
    const imageGalery = document.querySelectorAll(".lazy")

    const isInViewpoint = (element) => {
        const rect =element.getBoundingClientRect();
        return(
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        )
    };

    const loadImage = (image) => {
        const src =image.getAttribute("data-src");
        if(src){
            image.src = src;
            image.classList.add("loaded");
        };
    ;}

    const handleScroll = ()=>{
        imageGalery.forEach((image) =>{
            if(!image.classList.contains("loaded") && isInViewpoint(image)){
            loadImage(image);
            }
        });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
})