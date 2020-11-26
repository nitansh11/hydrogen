/*************Pagination Code by Nitansh(Start)*************/

var paginationDiv = document.getElementById("pagination");
var allPages = document.querySelectorAll("#pagination > button");

for (var i = 0; i < allPages.length; i++) {
  allPages[i].addEventListener("click", buttonClicked);
}
function buttonClicked(e) {
  var pageNo = e.target.value;
  var allSideBanners = document.getElementsByClassName("side-banner");
  var imgArr = [],
    p1Arr,
    p2Arr,
    p3Arr;
  for (var i = 0; i < allPages.length; i++) {
    allPages[i].style.textDecoration = "none";
    allPages[i].style.color = "rgba(43,96,255,0.9)";
  }

  if (pageNo == 1) {
    imgArr = [
      "https://ksr-ugc.imgix.net/assets/030/774/178/2bee338ca13fb650fb6ececd28930859_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1601255670&auto=format&frame=1&q=92&s=0e976e1e7e8fc4bc19f738d6624613d8",
      "https://ksr-ugc.imgix.net/assets/031/435/526/270b2cbd070ca5de2a3e0a4d66e1c963_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1605559569&auto=format&frame=1&q=92&s=4861785a8cb9a915394ab07fcdc3fbaf",
      "https://ksr-ugc.imgix.net/assets/031/529/967/6d601abc8342734e83d383ef6aef782f_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1606237279&auto=format&frame=1&q=92&s=862fbe4c94fdcc2a8730b06427ad52ac",
    ];

    p1Arr = [
      "DRACULA: THE EVIDENCE Hardcover Edition...",
      "Gloria & Lil's: the recipe book...",
      "MÄNNKITCHEN Pepper Cannon...",
    ];
    p2Arr = ["1266% funded", "136% funded", "236% funded"];

    e.target.style.textDecoration = "underline";
    e.target.style.color = "purple";
  } else if (pageNo == 2) {
    imgArr = [
      "https://ksr-ugc.imgix.net/assets/030/988/155/ffde6cbe6f240350f1751d8b0b3509c4_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1602606430&auto=format&frame=1&q=92&s=27b0db8bc7c1fdc42d9c319e52cc9d1b",
      "https://ksr-ugc.imgix.net/assets/031/422/744/6906d009135426ddd4eabae469a5df06_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1605473093&auto=format&frame=1&q=92&s=9d30353799bd8bccc1b61de2ee9ad159",
      "https://ksr-ugc.imgix.net/assets/031/458/168/4c1cc92b02ef023aac0941f822c81c80_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1605703376&auto=format&frame=1&q=92&s=6ef582d687e2c30acba3a03eeb821b79",
    ];
    p1Arr = [
      "Escape the Dark Sector - Expand the Universe...",
      '"Goodnight Moon" - Armenian Translation Project',
      "MÄNNKITCHEN Pepper Cannon...",
    ];
    p2Arr = ["1266% funded", "136% funded", "236% funded"];
    e.target.style.textDecoration = "underline";
    e.target.style.color = "purple";
  } else if (pageNo == 3) {
    imgArr = [
      "https://ksr-ugc.imgix.net/assets/031/180/063/c88d41d4ec7694c3bf0d95db46784eb7_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1603818361&auto=format&frame=1&q=92&s=25a7d6fec75ac85dba7f6d6116542086",
      "https://ksr-ugc.imgix.net/assets/031/395/068/a2541e3cfdc658b21c6fe5eb6e946d0e_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1605244518&auto=format&frame=1&q=92&s=3383b57d583b6731fff6a472874f16b4",
      "https://ksr-ugc.imgix.net/assets/031/167/273/5c30e8a146842cd252c0fe0f72138282_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1603744115&auto=format&frame=1&q=92&s=03f3642b927ebee2612282cbd888864e",
    ];
    p1Arr = [
      "The Wandering Star Tarot Deck...",
      "Legends of 16-Bit Game Development...",
      "Inspire songs and live your legend in this cooperative ...",
    ];
    p2Arr = ["123% funded", "2536% funded", "332% funded"];
    e.target.style.textDecoration = "underline";
    e.target.style.color = "purple";
  }
  for (var i = 0; i < allSideBanners.length; i++) {
    allSideBanners[i].getElementsByTagName("img")[0].src = imgArr[i];
    allSideBanners[i].getElementsByTagName("p")[0].textContent = p1Arr[i];
    allSideBanners[i].getElementsByTagName("p")[1].textContent = p2Arr[i];
  }
}

/*************Pagination Code by Nitansh(End)*************/

/*************slide show by arshad**********/
var btn=document.getElementsByClassName("button_ars");
var div=document.getElementsByClassName("div");
l=0;
for(var i=0;i<div.length;i++){
    console.log(div[i]);
}

btn[1].onclick = ()=>{
    l++;
    for(var i=0;i<div.length;i++){
        console.log(div[i]);

       
       if(l==0){
           div[i].style.left="0px";
       }
       if(l==1){
          div[i].style.left="-740px";
           
       }
       if(l>1){
           l=1;
       }
       console.log("arshad");
   }
}
btn[0].onclick = ()=>{
    l--;
    for(var i=0;i<div.length;i++){
        console.log(div[i]);

       
       if(l==0){
           div[i].style.left="0px";
       }
       if(l==1){
          div[i].style.left="-740px";
           
       }
       if(l==2){
          div[i].style.left="-1480px";
       }
       if(l==3){
          div[i].style.left="-2220px";
       }
       
       if(l<0){
           l=0;
       }
       console.log("arshad");
   }
}
