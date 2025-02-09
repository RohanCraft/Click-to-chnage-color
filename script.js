const container = document.querySelector('.container');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const violate = document.querySelector('.violate');
const defaultButton  = document.querySelector('.default');

let newHeading = document.createElement('h1');

function remove(){
    if(container.contains(newHeading)){
        container.style.backgroundColor="white";
        container.removeChild(newHeading);
        console.log("removed the text and color");
        
    }
}
function ChangeColor(color,content){
    container.style.backgroundColor = color;
    newHeading.innerText =content;
    container.appendChild(newHeading);
    console.log("you clicked a button");
    
}


red.addEventListener('click',()=>{
    remove();
    ChangeColor('red',`You clicked the "red" button`);
    
});
green.addEventListener('click',()=>{
    remove();
    ChangeColor('green',`You clicked the "green" button`);
});
blue.addEventListener('click',()=>{
    remove();
    ChangeColor('blue',`You clicked the "blue" button`);
});
black.addEventListener('click',()=>{
    remove();
    ChangeColor('black',`You clicked the "black" button`);
});
orange.addEventListener('click',()=>{
    remove();
    ChangeColor('orange',`You clicked the "orange" button`);
});
yellow.addEventListener('click',()=>{
    remove();
    ChangeColor('yellow',`You clicked the "yellow" button`);
});
violate.addEventListener('click',()=>{
    remove();
    ChangeColor('violet',`You clicked the "violate" button`);
});
defaultButton .addEventListener('click',()=>{
    remove();
    ChangeColor('white',`You clicked the "default" button`);
});