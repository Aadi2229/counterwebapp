const countValue=document.querySelector('.counter');
const increment=function(){
    let value=parseInt(countValue.innerText);
    value++;
    countValue.innerText=value;
};
const decrement=function(){
    let value=parseInt(countValue.innerText);
    value--;
    countValue.innerText=value;
};
const setzero=function(){
    countValue.innerText=0;
};
