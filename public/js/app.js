
let search='';
const description=document.querySelector('.description');

document.querySelector('button').addEventListener('click',buttonClicked)
document.querySelector('.search').addEventListener('keypress',(e)=>{
    search=e.target.value;
    if(e.key === 'Enter'){
        buttonClicked()
    }
})

function buttonClicked(){
    window.location.href+=`weather?address=${search}`;
    description.textContent='Loading...';
}