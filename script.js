document.addEventListener("DOMContentLoaded",()=>{
    const elements=document.querySelectorAll('.feedback');
    elements.forEach(element=>{
        const question=element.querySelector('.question');
        const icon=element.querySelector('.icon');
        const answer=element.querySelector('.answer');
        element.addEventListener('click', ()=>{
            icon.classList.toggle('active');
            answer.classList.toggle('active');
           
        });
    });
});



