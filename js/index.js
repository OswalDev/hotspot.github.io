//function expression to select elements
const selectElement = (s)=> document.querySelector(s);
//open the menu onclick event
selectElement('.open').addEventListener('click', ()=>{
    selectElement('.nav-list').classList.add('active');
});
//close the menu onclick event
selectElement('.close').addEventListener('click', ()=>{
    selectElement('.nav-list').classList.remove('active');
});