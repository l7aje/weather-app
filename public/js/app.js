
let search='';
const description=document.querySelector('.description');

document.querySelector('button').addEventListener('click',buttonClicked)
document.querySelector('.search').addEventListener('change',(e)=>{
    search=e.target.value;
    if(e.key === 'Enter'){
        buttonClicked()
    }
})

function buttonClicked(){
    description.textContent='Loading...';
    fetch(`/weather?address=${search}`).then((response) => {
        response.json().then((data) => {
            console.log(search)
            console.log(data)
            description.textContent='';
            if (data.error) {
                description.textContent = data.error;
            } else {
                description.textContent = data.desc;
               
            }
        })
    })
} 
