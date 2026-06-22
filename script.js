const images = [
{
    src:"closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.avif",
    title:"image1"
},
{
    src:"images.jpg",
    title:"image2"
},
{
    src:"image1.jpg",
    title:"image3"
},
{
    src:"some-of-my-favourite-bird-images-from-the-last-12-months-v0-jkyypk1t5zre1.webp",
    title:"image4"
}
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");

let currentIndex = 0;

images.forEach((image,index)=>{
    const img=document.createElement("img");
    img.src=image.src;
    img.alt=image.title;

    img.addEventListener("click",()=>{
        openModal(index);
    });

    gallery.appendChild(img);
});

function openModal(index){
    currentIndex=index;
    modal.style.display="flex";
    modalImg.src=images[index].src;
    caption.textContent=images[index].title;
}

document.getElementById("close").onclick=()=>{
    modal.style.display="none";
};

document.getElementById("next").onclick=()=>{
    currentIndex=(currentIndex+1)%images.length;
    openModal(currentIndex);
};

document.getElementById("prev").onclick=()=>{
    currentIndex=
        (currentIndex-1+images.length)%images.length;
    openModal(currentIndex);
};