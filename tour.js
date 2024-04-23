const nextbtn= document.querySelector(".next-btn");
const prevbtn= document.querySelector(".prev-btn");
const slides =document.querySelectorAll(".slide");

let numberofslide= slides.length;
let slidenumber=0;

nextbtn.addEventListener("click",()=>{
    slides.forEach((slide)=>{
        slide.classList.remove("active")
    })
    slidenumber++;
    if (slidenumber>(numberofslide-1)){
        slidenumber=0;
    }
    slides[slidenumber].classList.add("active");
})
prevbtn.addEventListener("click",()=>{
    slides.forEach((slide)=>{
        slide.classList.remove("active")
    })
    slidenumber--;
    if (slidenumber<0){
        slidenumber=(numberofslide-1);
    }
    slides[slidenumber].classList.add("active");
})