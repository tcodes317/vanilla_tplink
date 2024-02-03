let sliderIndex=1;
showSlider(sliderIndex);

function plusSlider(n){
    showSlider(sliderIndex+=n)
}
function currentSlider(n){
    showSlider(sliderIndex=n)
}
function showSlider(n){
    let i;
    let slides=document.getElementsByClassName("imgSlider");
    let dots=document.getElementsByClassName("dot");

    if(n > slides.length){sliderIndex = 1}
    if(n < 1){sliderIndex = slides.length}

    for(i=0;i<slides.length;i++){
        slides[i].style="display: none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[sliderIndex - 1].style="display: block";
    dots[sliderIndex - 1].className+=" active";
}

let btnacti=document.querySelector(".btnactive");btnacti.addEventListener("click", (e)=>{let p=document.createElement("div");e.target.append(p);e.target.style="color: #000;";p.style="position: absolute;left: 42%;bottom: 0;padding: 2px; width: 50px; margin: 0 auto;background-color: lightblue;transition: all linear 3s"})