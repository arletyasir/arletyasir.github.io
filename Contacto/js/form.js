document.addEventListener('DOMContentLoaded',()=>{
const $countries = document.querySelector('#countries');
fetch('https://restcountries.com/v3.1/all').then(res =>{
    return res.json();
}).then(data =>{
    let option = "";
    data.forEach(country =>{
        option += `<option value="${country.name}">${country.name}</option>`;
    })
    $countries.innerHTML = option;
}).catch(error =>{
    console.log(error);
})
});



const $form = document.querySelector('#form');

$form.addEventListener('submit',handleSumit)

function handleSumit(event){
    event.preventDefault();
    const form = new FormData(this);

    let checkbox = document.getElementById('cbox1');
    let ckeck='';

   
    console.log(form.get('name'));
    console.log(form.get('email'));
    console.log(form.get('message'));
    console.log(form.get('countries'));
    console.log(form.get('drone'));



}