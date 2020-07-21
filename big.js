window.onload=function(){
var box=document.getElementById('box');
var smallBox=box.children[0];
var bigBox=box.children[1];
var cover=smallBox.children[1];
var bigImage=bigBox.children[0];
box.onmouseenter=function(){
cover.style.display="block";
bigBox.style.display="block";
}
box.onmouseleave=function(){
cover.style.display="none";
bigBox.style.display="none";
}            
box.onmousemove=function(e){
e = e || window.event;
var mouse_in_documentX=e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
var mouse_in_documentY=e.pageY || e.clientY+(document.documentElement.scrollTop || document.body.scrollTop);
var mouse_in_boxX=mouse_in_documentX-box.offsetLeft;
var mouse_in_boxY=mouse_in_documentY-box.offsetTop;
var coverX=mouse_in_boxX - cover.offsetWidth/2 ;
var coverY=mouse_in_boxY - cover.offsetHeight/2;
coverX= ( coverX < 0 ) ? 0 : coverX;
coverY= ( coverY < 0 ) ? 0 : coverY;
coverX=( coverX > ( box.offsetWidth - cover.offsetWidth)) ? ( box.offsetWidth - cover.offsetWidth) : coverX;
coverY=( coverY > ( box.offsetHeight - cover.offsetHeight)) ? ( box.offsetHeight - cover.offsetHeight) : coverY;
cover.style.top=coverY + 'px';
cover.style.left=coverX + 'px';
var coverMax=box.offsetWidth-cover.offsetWidth;
var bigImageMax=bigImage.offsetWidth-bigBox.offsetWidth;
var bigImageX=coverX*bigImageMax/coverMax;
var bigImageY=coverY*bigImageMax/coverMax;              
bigImage.style.top=-bigImageY+'px';
bigImage.style.left=-bigImageX+'px';
}
}
