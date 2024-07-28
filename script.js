document.addEventListener("DOMContentLoaded",()=>{
const all = document.getElementById('all');
const allValue = document.getElementById('all_value');
const border = document.getElementById('border');
const code = document.getElementById('code');
const container = document.querySelector(".container");
const btnCopy = document.querySelector("#btnCopy");
const border_styleEle = document.querySelector("#border_style");
var pixel=10;
var coding = "";
var border_style = "dashed";
var border_size = 2;
function updateRange(){
    pixel=all.value;
    border_size=border.value;
    border_style = border_styleEle.value
    allValue.innerText=pixel+"px";
    coding=`
      border-radius:${pixel}px;
      border:${border_size}px ${border_style} blue;
    `
    code.value=coding;
    container.style.cssText=coding;
}
border.addEventListener("mousemove",updateRange);
border.addEventListener("change",updateRange);


all.addEventListener("mousemove",updateRange);
all.addEventListener("change",updateRange);
btnCopy.addEventListener("click",()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert("Code Copied");
});
updateRange();

border_styleEle.addEventListener('change',function(){
    border_style=this.value;
    updateRange();

});
});