const KnowmoreBtn = document.querySelector(".knowMoreBtn");
const subContent = document.querySelector(".sub-content");
const name_h1 = document.querySelector(".Name_h1");

KnowmoreBtn.addEventListener('click', () => {
    subContent.classList.toggle('open');
    KnowmoreBtn.textContent = 'Know Less'
});

name_h1.addEventListener('mouseenter', () => {
    name_h1.classList.add('fading');
    console.log('mouse enter');

    setTimeout(() => {
        name_h1.innerHTML = `<span>A</span>lan <span>T</span>amio`;
        name_h1.classList.remove('fading');
    },300);
});

name_h1.addEventListener('mouseleave', () => {
    name_h1.classList.add('fading');    
    setTimeout(() => {
        name_h1.innerHTML = `<span>A.</span>T.`;
        name_h1.classList.remove('fading');
    },300);
})
