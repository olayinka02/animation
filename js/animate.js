var imgObj=null;
var animate;
function init() {
    imgObj= document.getElementById('trolley');
    imgObj.style.position="relative"
    imgObj.style.left="0px"
}
function moveRight() {
    imgObj.style.left=parseInt(imgObj.style.left) + 10 +"px";
   animate= setTimeout(moveRight, 40)
    
}

function stop() {
    clearTimeout(animate);
    imgObj.style.right='0px';
    
}
window.onload=init;