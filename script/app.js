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
let tts=document.querySelector(".lta");let rec=document.querySelector(".ma-iii .btn .btnactive");rec.addEventListener("click", (e)=>{e.target.classList.add("bottom");e.target.style="color: #000 !important"; tts.classList.remove("bottom");tts.style="color: #c7c7c7"});rec.classList.add("bottom");tts.addEventListener("click", (e)=>{e.target.classList.add("bottom");e.target.style="color: #000"; rec.classList.remove("bottom");rec.style="color: #c7c7c7 !important"});let hjk=document.getElementById("ppi");hjk.addEventListener("mouseover", ()=>{document.querySelector(".se .flex .i .h-nav .hom a").style="border-bottom: 5px solid rgb(0, 168, 168)";let iiu=document.getElementById("dropdown");iiu.style="display: block !important;"});hjk.addEventListener("mouseout", ()=>{let iiu=document.getElementById("dropdown");iiu.style="display: none";document.querySelector(".se .flex .i .h-nav .hom a").style="border-bottom: 5px solid transparent"});function ty(){document.getElementById("pyi").style="display: none";document.body.style="overflow: visible";}function uu(){document.getElementById("pyi").style="display: block !important";document.body.style="overflow: hidden";};let huu=document.querySelector("hom-ii");