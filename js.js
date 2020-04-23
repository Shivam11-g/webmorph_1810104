 function switchPage() {

var page2=document.getElementsByClassName("page-2");
var page1 =document.getElementsByClassName("page-1");

console.log(page1.length);


for (var i = 0; i < page1.length; i++) {
  page1[i].style.display="none";
}
for (var i = 0; i < page2.length; i++) {
  page2[i].style.display="block";
}


}