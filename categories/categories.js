var path=window.location.href;

if(path.includes("arts")){
    var h1Text="Arts";
    var pText="Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art and performance.";
    var liText=['Explore Art','Explore Dance','Explore Photography','Explore Theater'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("comics")){
    var h1Text="Comics & Illustration";
    var pText="Explore fantastical worlds and original characters from Kickstarter’s community of comics creators and illustrators.";
    var liText=['Explore Comics','Explore Illustration'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("design")){
    var h1Text="Design & Tech";
    var pText="From fine design to innovative tech, discover projects from creators working to build a more beautiful future.";
    var liText=['Explore Design','Explore Technology'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("film")){
    var h1Text="Film";
    var pText="Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.";
    var liText=['Explore Film & Video'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("food")){
    var h1Text="Food & Craft";
    var pText="See how artisans and entrepreneurs are using Kickstarter to break new ground in food, fashion, and crafts.";
    var liText=['Explore Crafts','Explore Fashion','Explore Food'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("games")){
    var h1Text="Games";
    var pText="From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.";
    var liText=['Explore Games'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("music")){
    var h1Text="Music";
    var pText="Discover new albums, performances, and independent venues from creators using Kickstarter to shape the future of sound.";
    var liText=['Explore Music'];
    createDynamicHeader(h1Text,pText,liText);
}
else if(path.includes("publishing")){
    var h1Text="Publishing";
    var pText="Explore how writers and publishers are using Kickstarter to bring new literature, periodicals, podcasts, and more to life.";
    var liText=['Explore Journalism','Explore Publishing'];
    createDynamicHeader(h1Text,pText,liText);
}


function createDynamicHeader(h1Text,pText,liText){
    var dynamicDivTag=document.createElement('div');
    dynamicDivTag.style.width="80%";
    dynamicDivTag.style.paddingTop="20px";
    dynamicDivTag.style.margin="20px auto";

    var h1Tag=document.createElement('h1');
    h1Tag.textContent=h1Text;
    h1Tag.style.fontWeight='normal';

    var pTag=document.createElement('p');
    pTag.textContent=pText;
    pTag.style.margin='15px 0';
    pTag.style.color='gray';
   

    var ulTag=document.createElement('ul');
    ulTag.style.marginTop='20px'
    for(var i=0;i<liText.length;i++){
        var liTag=document.createElement('li');
        
        liTag.textContent=liText[i];
        liTag.style.listStyle='none';
        liTag.style.display='inline';
        liTag.style.paddingRight='30px';
        liTag.style.fontSize='14px';
        liTag.style.color='#4C6CF8'
        
        ulTag.appendChild(liTag);
    }
    dynamicDivTag.appendChild(h1Tag);
    dynamicDivTag.appendChild(pTag);
    dynamicDivTag.appendChild(ulTag);

   var navigation= document.getElementById('navigation')
   navigation.parentNode.insertBefore(dynamicDivTag,navigation.nextSibling);
}