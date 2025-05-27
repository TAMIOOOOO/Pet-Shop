
const nameSection = document.getElementById ("name-section");
const nameUnhovered = document.querySelector('.h1');


nameUnhovered.addEventListener('mouseenter', () => {
    nameUnhovered.classList.add("fading");

    setTimeout(()=> {
        nameUnhovered.innerHTML = `<span>A</span>lan <span>T</span>amio`;
        nameUnhovered.classList.remove("fading");
    }, 200);
});

nameUnhovered.addEventListener('mouseleave', () => {
    nameUnhovered.classList.add("fading");

    setTimeout(() => {
        nameUnhovered.innerHTML = "<span>A</span>T";
        nameUnhovered.classList.remove("fading");        
    }, 200);
});

function nameSectionMove() {
    const button = document.querySelector(".buttonMove");

    button.addEventListener('mouseenter',()=> {
       nameUnhovered.classList.add("newPosition"); 
    });
};